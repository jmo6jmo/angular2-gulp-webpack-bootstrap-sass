# README #

An Angular 2 starter with [Gulp](http://gulpjs.com/), [Webpack](http://webpack.github.io/), [Bootstrap-Sass](https://github.com/twbs/bootstrap-sass), [Font-Awesome Sass](http://fontawesome.io/), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul) (a fork of [AngularClass' starter](https://github.com/AngularClass/angular2-webpack-starter)).

### How do I get set up? ###

#### Install required tools

* Install `Node.js`
* Install `gulp` globally
```
npm install -g gulp
```

#### Install project dependencies

In the project root directory:

* Install Node.js packages
```
npm install
```
* You can ignore most of the warnings and errors like failed optional dependencies, etc.

* After `npm install`, check that `typings` folder is created. It contains the Typescript definition files of the dependencies.

#### Use Gulp tasks (defined in /config/gulp.*.js)

* `gulp serve` to compile Webpack and launch Webpack Dev Server with Watch and Hot Module Reload
* `gulp build` to build a bundled production version of the application in `/dist`
* `gulp serve:dist` to launch a server (using BrowserSync) on the production build

#### NPM scripts (in package.json) that are not ported to Gulp yet

* `npm test` to run Karma unit tests
