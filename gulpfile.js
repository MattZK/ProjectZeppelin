// EXTERNAL DOCUMENT
//
// Name: Gulp Execution File
// Author: Matthias Willemsen
// Portfolio: https://mattwill.be
// Licence: MIT
// Version: 2.0#24FEB2018
// -- -- -- -- -- -- -- -- -- -- -- --
// Document: Gulp File [JS] - Node.JS
// Intended use: Project Zepplin
//

//// Packages
// Main Gulp Package
const gulp = require('gulp');
// Image Compression
const imagemin = require('gulp-imagemin');
// SASS to CSS compiler (Requires SASS Ruby to be installed)
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
// JavaScript Processing
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
// File Concatenation & Minification
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// Error processing
const plumber = require('gulp-plumber');
// Browser Sync Package
const browserSync = require('browser-sync').create();

//// Sources
const sources = {
  html: 'src/*.html',
  scss: 'src/scss/*.scss',
  js: 'src/js/**/*.js',
  ts: 'src/ts/**/*.ts',
  json: 'src/**/*.json',
  img: 'src/img/**/*.*'
};

//// Tasks
// HTML Handlers
gulp.task('html:dev', () => {
  return gulp.src(sources.html).pipe(gulp.dest('dist'));
});
gulp.task('html:dist', () => {
  return gulp.src(sources.html).pipe(gulp.dest('docs'));
});

// SCSS Handlers
gulp.task('scss:dev', () => {
  return gulp.src(sources.scss).pipe(plumber()).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write('./maps')).pipe(gulp.dest('dist/css')).pipe(browserSync.stream());
});
gulp.task('scss:dist', () => {
  return gulp.src(sources.scss).pipe(plumber()).pipe(sass()).pipe(gulp.dest('docs/css')).pipe(browserSync.stream());
});

// JS Handlers
gulp.task('js:dev', () => {
  return gulp.src(sources.js).pipe(plumber()).pipe(babel({presets: ['env']})).pipe(gulp.dest('dist/js')).on('change', browserSync.reload);
});
gulp.task('js:dist', () => {
  return gulp.src(sources.js).pipe(plumber()).pipe(babel({presets: ['env']})).pipe(gulp.dest('docs/js'));
});

// TS Handlers
gulp.task('ts:dev', () => {
  return gulp.src(sources.ts).pipe(plumber()).pipe(ts({noImplicitAny: true})).pipe(babel({presets: ['env']})).pipe(gulp.dest('dist/js'));
});
gulp.task('ts:dist', () => {
  return gulp.src(sources.ts).pipe(plumber()).pipe(ts({noImplicitAny: true})).pipe(babel({presets: ['env']})).pipe(gulp.dest('docs/js'));
});

// IMG Handlers
gulp.task('img:dev', () => {
  return gulp.src(sources.img).pipe(gulp.dest('dist/img'));
});
gulp.task('img:dist', () => {
  return gulp.src(sources.img).pipe(imagemin()).pipe(gulp.dest('docs/img'));
});

// JSON 
gulp.task('json:dev', () => {
  return gulp.src(sources.json).pipe(gulp.dest('dist'));
});
gulp.task('json:dist', () => {
  return gulp.src(sources.json).pipe(imagemin()).pipe(gulp.dest('docs'));
});

//// Executables
gulp.task('default', ['html:dev','scss:dev','js:dev','ts:dev','img:dev','json:dev'], () => {
  browserSync.init({ server: "./dist" });
  gulp.watch(sources.html, ['html:dev']);
  gulp.watch(sources.scss, ['scss:dev']);
  gulp.watch(sources.js, ['js:dev']);
  gulp.watch(sources.ts, ['ts:dev']);
  gulp.watch(sources.img, ['img:dev']);
  gulp.watch(sources.json, ['json:dev']);
});
gulp.task('build', ['html:dist','scss:dist','js:dist','ts:dist','img:dist','json:dist']);