'use strict';

var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var rimraf = require('rimraf');

gulp.task('clean', function (callback) {
  rimraf('./dist', callback);
});

function webpackStart(webpackCofigPath) {
  var webpackConfig = require(webpackCofigPath);
  webpack(webpackConfig, function(err, stats) {
      if(err) throw new gutil.PluginError('build', err);
      gutil.log("[build]", stats.toString({
          timings: true,
          cached: true,
          errorDetails: true,
          colors: true
      }));
  });
};

gulp.task('build', ['clean'], function() {
    webpackStart('./webpack.prod.js');
});

gulp.task('build:dev', ['clean'], function() {
    webpackStart('./webpack.dev.js');
});
