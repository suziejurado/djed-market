'use strict';

var _ = require( 'lodash' );
var path = require( 'path' );
var fs = require( 'fs' );
var del = require( 'del' );
var argv = require( 'yargs' ).argv;
var gulp = require( 'gulp' );
var gulpif = require( 'gulp-if' );
var gutil = require( 'gulp-util' );
var gzip = require( 'gulp-gzip' );
var connect = require( 'gulp-connect' );
var awspublish = require( 'gulp-awspublish' );
var through2 = require( 'through2' );
var cloudfront = require( 'cloudfront' );
var concat = require( 'gulp-concat' );
var minifyCss = require( 'gulp-minify-css' );
var gulpSwig = require( 'gulp-swig' );
var data = require( 'gulp-data' );
var embedlr = require( 'gulp-embedlr' );
var livereload = require( 'gulp-livereload' );
var minifyHtml = require( 'gulp-minify-html' );
var rev = require( 'gulp-rev' );
var streamify = require( 'gulp-streamify' );
var imagemin = require( 'gulp-imagemin' );
var rename = require( 'gulp-rename' );
var filter = require( 'gulp-filter' );

var listen = require( 'listen' );
var traverse = require( 'traverse' );
var swig = require( 'swig' );
var cssurl = require( 'cssurl' );
var hash = require( 'object-hash' );
var browserify = require( 'browserify' );
var exorcist = require( 'exorcist' );
var watchify = require( 'watchify' );
var source = require( 'vinyl-source-stream' );
var concatStream = require( 'concat-stream' );

var isDev = false;
var isStage = false;
var isProd = false;

var manifest;
var content;
var distDir = './dist';
var buildManifest = 'build.manifest.json';
var manifestFilepath = path.resolve( __dirname, buildManifest );

var markupRoot = './src/html/';
var markupPages = markupRoot + 'pages/';
var markupWatch = [ markupRoot + '**/*.html', 'node_modules/djed/marketing/components/**/*.html', './content.js', 'config.dev.js' ];
var markupSrc = [ markupPages + '**/*.html' ];

var bundleConfig = require( './bundle.config.js' );

var srcBase = path.resolve( __dirname, 'src' );

var cssSrc = [ './src/**/*.css', './node_modules/ladda/dist/ladda.min.css' ];
var staticSrc = [ './src/img/**/*', './src/fonts/**/*' ];

var outputCSSFilepath = 'styles.css';

var devConfig = require( './config.dev.js' );
var stageConfig = require( './config.stage.js' );
var prodConfig = require( './config.prod.js' );

var isDeployable = function () {
  return isStage || isProd;
};

var swapAssets = function ( manifest, content ) {
  traverse( content ).forEach( function ( val ) {
    var url;
    if ( _.isString( val ) && val.indexOf( '/' ) === 0 ) {
      url = manifest[ val.substring( 1 ) ];
      if ( url ) {
        this.update( '/' + url.replace( '.gz', '' ) );
      }
    }
  } );
};

var getDeployData = function () {

  var genDeployData = function ( config ) {
    var accessKey = process.env[ config.accessKeyName ];
    var secretKey = process.env[ config.secretKeyName ];
    var distributionId = process.env[ config.distributionId ];

    if ( !accessKey || !secretKey ) {
      throw new gutil.PluginError( 'deploy', 'AWS environment variables not set for deploy.' );
    }

    return {
      key: accessKey,
      secret: secretKey,
      bucket: config.bucket,
      style: 'path',
      distributionId: distributionId
    };
  };

  if ( isProd ) {
    return genDeployData( prodConfig.deploy );
  } else if ( isStage ) {
    return genDeployData( stageConfig.deploy );
  }
};

var getPageData = function ( vinyl ) {
  var data = {};
  var pageContent = {};
  var pageConfig = _.find( content.pages, function ( page ) {
    return vinyl.path === path.resolve( __dirname, page.template );
  } );

  if ( pageConfig ) {
    pageContent.useAppCache = pageConfig.useAppCache;
    pageContent.content = content.stories[ pageConfig.story ];
    pageContent.story = pageConfig.story;
    pageContent.stories = _.map( pageConfig.stories, function ( key ) {
      return _.extend( {
        id: key
      }, content.stories[ key ] );
    } );
  }

  if ( isProd ) {
    data.page = prodConfig.page;
  } else if ( isStage ) {
    data.page = stageConfig.page;
  } else {
    data.page = devConfig.page;
  }

  data.page.isDeploying = isDeployable();

  _.extend( data, pageContent );

  return data;
};

var bundleError = _.template(
  '\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n' +
  'PARSE ERROR in\n' +
  '<%= filename %>\n' +
  'on line <%= lineNumber %> at column <%= column %>\n\n' +
  '<%= description %>' +
  '\n¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡' );

var logBundleError = function ( err ) {
  try {
    gutil.log( gutil.colors.red( bundleError( err ) ) );
  } catch ( e ) {
    gutil.log( gutil.colors.red( err.toString() ) );
  }
};

var writeJS = function ( doWatch, doneListener ) {
  return function ( bundlerConfig ) {
    var bundleStream = bundlerConfig.bundler
      .bundle()
      .on( 'error', function ( err ) {
        logBundleError( err );
        this.end();
      } )
      .pipe(
        exorcist(
          './dist/' + bundlerConfig.config.output + '.map',
          '/' + bundlerConfig.config.output + '.map' )
      ) // (file, url)
      .pipe( source( bundlerConfig.config.output ) )
      .pipe( streamify( rev( isDeployable() ) ) )
      .pipe( gulpif( isDeployable(), gzip( {
        gzippedOnly: true
      } ) ) )
      .pipe( gulp.dest( distDir ) )
      .pipe( rev.manifest( manifestFilepath, {
        merge: true,
      } ) )
      .pipe( gulp.dest( __dirname ) );

    if ( doneListener ) {
      bundleStream.on( 'end', doneListener() );
    }

    if ( doWatch ) {
      bundleStream.on( 'end', function () {
        livereload.changed( bundlerConfig.config.output );
      } );
    }
  };
};

var toArrayOfDependentModules = function ( bundleConfig ) {
  return function ( memo, key ) {
    return memo.concat( bundleConfig[ key ].modules );
  };
};

var getDependentBundleExternals = function ( bundleConfig, moduleKey ) {
  return _( bundleConfig[ moduleKey ].deps || [] )
    .reduce( toArrayOfDependentModules( bundleConfig ), [] );
};

var entryModules = function ( config ) {
  return _.intersection( config.modules, config.entryModules );
};

var nonEntryModules = function ( config ) {
  return _.difference( config.modules, config.entryModules );
};

var toConfigureBundler = function ( bundleConfig, doWatch ) {
  return function ( config, key ) {
    var bundler, bundlerOutput, entry;
    var opts = ( doWatch ? config.options : config.prodOptions ) || {};

    var entryOpts = {
      entry: true
    };

    // entry option only applies on entry bundles
    var requireOpts = config.isEntry && entryOpts;

    if ( doWatch ) {
      // add necessary options for watchify
      _( opts ).defaults( {
        cache: {},
        packageCache: {}
      } );
    }

    // init bundler
    bundler = browserify( opts );

    // apply the transforms
    _( config.transforms ).each( function ( transformArgs ) {
      bundler.transform.apply( bundler, transformArgs );
    } );

    // apply the plugins
    _( config.plugins ).each( function ( pluginArgs ) {
      bundler.plugin.apply( bundler, pluginArgs );
    } );

    // define the externals
    bundler.external( getDependentBundleExternals( bundleConfig, key ) );

    // define excludes if set
    _( config.exclude ).each( function ( module ) {
      bundler.exclude( module );
    } );

    // require entry modules
    entry = entryModules( config );
    if ( entry.length ) {
      bundler.require( entry, entryOpts );
    }

    // require non-entry modules
    bundler.require( nonEntryModules( config ), requireOpts );

    // define output config
    bundlerOutput = {
      config: config,
      bundler: bundler
    };

    // add watchify event handler, if flag passed
    if ( doWatch ) {
      bundler = watchify( bundler );
      bundler.on( 'update', function () {
        writeJS( doWatch )( bundlerOutput );
      } );
    } else {
      // apply the prodTransforms
      _( config.prodTransforms ).each( function ( transformArgs ) {
        bundler.transform.apply( bundler, transformArgs );
      } );
    }

    return bundlerOutput;

  };
};

var bundleJS = function ( bundleConfig, doWatch, doneListener ) {
  _( bundleConfig )
    .map( toConfigureBundler( bundleConfig, doWatch ) )
    .each( writeJS( doWatch, doneListener ) );
};

var buildMarkup = function ( done ) {
  try {
    manifest = JSON.parse( fs.readFileSync( buildManifest, 'utf8' ) );
  } catch ( e ) {
    manifest = {};
  }

  delete require.cache[ path.resolve( process.cwd(), 'content.js' ) ];
  content = require( './content.js' );

  if ( isDeployable() ) {
    swapAssets( manifest, content );
  }

  gulp.src( markupSrc, {
      base: markupPages
    } )
    .pipe( data( getPageData ) )
    .pipe( gulpSwig( {
      defaults: {
        cache: false
      },
      setup: function ( swig ) {
        swig.setFilter( 'static', function ( input ) {
          var key = input.indexOf( '/' ) === 0 ? input.substring( 1 ) : input;
          var entry = manifest[ key ];
          var manifestEntry = entry && entry.replace( '.gz', '' );
          return manifestEntry ? '/' + manifestEntry : input;
        } );

        swig.setDefaults( {
          loader: {
            resolve: function ( to ) {
              var p = path.resolve( __dirname, to );
              return p;
            },
            load: function ( identifier ) {
              return fs.readFileSync( identifier, {
                encoding: 'utf-8'
              } );
            }
          }
        } );
      }
    } ) )
    .pipe( gulpif( isDev, embedlr() ) )
    .pipe( minifyHtml() )
    .pipe( gulpif( isDeployable(), gzip( {
      gzippedOnly: true
    } ) ) )
    .pipe( gulp.dest( distDir ) )
    .pipe( livereload() )
    .on( 'end', function () {

      // write manifest
      var manifestTpl = swig.compileFile( './app.manifest.tpl' );
      var manifestFilepath = path.resolve( distDir, 'app.manifest' );
      var files = _.values( manifest ).map( function ( file ) {
        return file.replace( '.gz', '' );
      } );
      var h = hash( JSON.stringify( files ) + _.random( 0, 10000 ) );
      var content = manifestTpl( {
        files: files,
        hash: h
      } );
      fs.writeFileSync( manifestFilepath, content );

      // replace urls in css
      var rewriter = new cssurl.URLRewriter( function ( url ) {
        var relativeUrl = url.substring( 1 );
        var versionedUrl = manifest[ relativeUrl ];
        return versionedUrl ? '/' + versionedUrl.replace( '.gz', '' ) : url;
      } );
      var cssFilepath = path.resolve( distDir, manifest[ outputCSSFilepath ] );
      var css = fs.readFileSync( cssFilepath, 'utf8' );
      var newCss = rewriter.rewrite( css );
      fs.writeFileSync( cssFilepath, newCss );

      // gzip 'em
      gulp.src( [ cssFilepath, manifestFilepath ] )
        .pipe( gulpif( isDeployable(), gzip( {
          gzippedOnly: true
        } ) ) )
        .pipe( gulp.dest( distDir ) )
        .on( 'end', done );
    } );
};

gulp.task( 'default', [ 'dev' ] );

gulp.task( 'dev', [ 'set-dev-flag', 'clean', 'webserver', 'livereload', 'watch-js', 'watch-css', 'watch-static', 'watch-markup' ] );

gulp.task( 'deploy', [ 'set-env-flag', 'build' ], function () {
  var config = getDeployData();
  var publisher = awspublish.create( config );
  var gzipFilter = filter( '**/*.gz' );
  var pageFilter = filter( '**/*.html' );
  var cf = cloudfront.createClient( config.key, config.secret );
  return gulp.src( distDir + '/**' )
    .pipe( gzipFilter )
    .pipe( rename( function ( path ) {
      path.extname = '';
    } ) )
    .pipe( publisher.publish( {
      'x-amz-acl': 'private',
      'content-encoding': 'gzip',
      'cache-control': 'max-age=600'
    } ) )
    .pipe( publisher.cache() )
    .pipe( awspublish.reporter() )
    .pipe( pageFilter )
    .pipe( through2.obj( function ( vinyl, enc, callback ) {
      this.push( {
        path: '/' + path.relative( distDir, vinyl.path )
      } );
      callback();
    } ) )
    .pipe( concatStream( function ( paths ) {
      var cachedPaths = _.pluck( paths, 'path' );
      cf.createInvalidation( config.distributionId, _.random( 0, 10000000 ), cachedPaths, function ( err, invalidation ) {
        if ( err ) {
          gutil.log( 'Could not invalidate ' + cachedPaths.join( ', ' ) );
        } else {
          gutil.log( 'Invalidation success for ' + invalidation.paths.join( ', ' ) );
        }
      } );
    } ) );

} );

gulp.task( 'build', [ 'clean', 'build-js', 'build-css', 'build-static' ], function ( done ) {
  buildMarkup( done );
} );

gulp.task( 'build-markup', function ( done ) {
  buildMarkup( done );
} );

gulp.task( 'build-js', function ( done ) {
  var listener = listen();
  bundleJS( bundleConfig.toBrowserify, false, listener );
  listener.then( done );
} );

gulp.task( 'build-css', function () {
  return gulp.src( cssSrc, {
      base: srcBase
    } )
    .pipe( concat( outputCSSFilepath ) )
    .pipe( minifyCss() )
    .pipe( rev( isDeployable() ) )
    .pipe( gulp.dest( distDir ) )
    .pipe( livereload() )
    .pipe( rev.manifest( manifestFilepath, {
      merge: true,
    } ) )
    .pipe( gulp.dest( __dirname ) );
} );

gulp.task( 'build-static', function () {
  return gulp.src( staticSrc, {
      base: srcBase
    } )
    .pipe( rev( isDeployable() ) )
    .pipe( imagemin() )
    .pipe( gulpif( isDeployable(), gzip( {
      gzippedOnly: true
    } ) ) )
    .pipe( gulp.dest( distDir ) )
    .pipe( livereload() )
    .pipe( rev.manifest( manifestFilepath, {
      merge: true
    } ) )
    .pipe( gulp.dest( __dirname ) );
} );


gulp.task( 'watch-js', function () {
  bundleJS( bundleConfig.toBrowserify, true );
} );

gulp.task( 'watch-markup', [ 'build-markup' ], function () {
  gulp.watch( markupWatch, [ 'build-markup' ] );
} );

gulp.task( 'watch-css', [ 'build-css' ], function () {
  gulp.watch( cssSrc, [ 'build-css' ] );
} );

gulp.task( 'watch-static', [ 'build-static' ], function () {
  gulp.watch( staticSrc, [ 'build-static' ] );
} );

gulp.task( 'clean', function ( done ) {
  del( './dist', function () {
    fs.mkdir( './dist', function () {
      done();
    } );
  } );
} );

gulp.task( 'webserver', function () {
  connect.server( {
    root: distDir,
    port: 10000
  } );
} );

gulp.task( 'livereload', function () {
  livereload.listen( {
    quiet: true
  } );
} );

gulp.task( 'set-dev-flag', function () {
  isDev = true;
} );

gulp.task( 'set-env-flag', function () {
  if ( argv.staging ) {
    isStage = true;
  } else if ( argv.production ) {
    isProd = true;
  } else {
    throw new gutil.PluginError( 'deploy', 'To deploy, you must set either a --staging or --production flag. `gulp deploy --staging`' );
  }
} );
