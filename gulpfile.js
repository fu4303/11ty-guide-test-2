/*
Gulp 4
NPM Setup:
npm i gulp --global
npm i -D gulp
npm i -D gulp-nunjucks
*/

/*
This is for Eleventy Guide Nunjucks build.
*/

const { src, dest, series, parallel, watch } = require('gulp');
const nunjucks = require('gulp-nunjucks');

/* functions */

const nunjucksbuild = () => {
    return src('./src/*.html')
    .pipe(nunjucks.compile())
    .pipe(dest('./dist'));
};

const css = () => {
    return src('./src/css/*.css')
    .pipe(dest('./dist/css'));
};

const fonts = () => {
    return src('./src/fonts/*.*')
    .pipe(dest('./dist/fonts'));
};

exports.render = series(nunjucksbuild, css, fonts);