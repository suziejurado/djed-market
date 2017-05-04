'use strict';

var uglifyify = require( 'uglifyify' );
var aliasify = require( 'aliasify' );

var shim = require( 'browserify-shim' );

var lodashAlias = aliasify.configure( {
  aliases: {
    "underscore": "lodash"
  },
  configDir: __dirname
} );

var browserifyOptions = {
  debug: true
};

var prodBrowserifyOptions = {};

var transformOptions = {
  global: true
};

module.exports.toBrowserify = {

  "app": {
    "output": "app.js",
    "options": browserifyOptions,
    "prodOptions": prodBrowserifyOptions,
    "transforms": [
      [ shim ],
      [ lodashAlias, transformOptions ]
    ],
    "prodTransforms": [
      [ uglifyify, transformOptions ]
    ],
    "modules": [
      "lodash",
      "jquery",
      "fastclick",
      "hammerjs",
      "jquery-hammerjs",
      "velocity-animate",
      "./node_modules/waypoints/lib/jquery.waypoints.js",
      './node_modules/waypoints/lib/shortcuts/inview.js',
      './node_modules/waypoints/lib/shortcuts/sticky.js',
      './vendor/modal.js',
      "djed/marketing"
    ],
    "entryModules": [
      "./node_modules/waypoints/lib/jquery.waypoints.js",
      './node_modules/waypoints/lib/shortcuts/inview.js',
      './node_modules/waypoints/lib/shortcuts/sticky.js',
      './vendor/modal.js',
      "jquery-hammerjs"
    ]
  }

};
