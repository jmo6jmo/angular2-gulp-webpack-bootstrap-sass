'use strict';

var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task('serve', function () {
  process.env.HMR = true;
  var webpackConfig = require('./webpack.dev.js');
  webpackConfig.entry.main.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
  var compiler = webpack(webpackConfig);

  var server = new WebpackDevServer(compiler, webpackConfig.devServer);
  server.listen(8080, "localhost", function(err) {
    if (err) throw new gutil.PluginError("serve", err);
    // Server listening
    gutil.log("[serve]", "http://localhost:8080");
  });
});

// webpack-dev-server doesn't seem to have an api to serve only from file system (it's possible with CLI though).
// So use brower-sync to serve from dist folder.
var browserSync = require('browser-sync');

// ToDo: For later when proxy is needed
// var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */
  //server.middleware = proxyMiddleware(['/webapi1', '/webapi2'], {target: 'http://localhost:8081', changeOrigin: true});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: {
      baseDir: baseDir
    },
    browser: browser
  });
}

gulp.task('serve:dist', function () {
  browserSyncInit('dist');
});
