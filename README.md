# Djed.com Static Web App

Welcome to the client-side app.  All front-end assets are managed here.  
We're using [gulp](http://gulpjs.com/) and [browserify](http://browserify.org/) for our build pipeline, they're both tons of fun.

## Getting Started
You need `node` and `npm` installed on your system. You can use `brew` or install with an [installer](http://nodejs.org/download/).

Once installed, follow these steps.
- `npm install`
- `npm install -g gulp`

## Tasks

### `gulp dev`
Bundles app and watches for modifications, live-reloading the dev server at [http://localhost:10000](http://localhost:10000)

### `gulp build`
Bundles for production deployment.