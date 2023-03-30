'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;

function compilaSass() {
    return gulp.src('source/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/css'));
};

function comprimeImagens() {
    return gulp.src('source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
};

function minificaHTML() {
    return gulp.src('source/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

function minificaJS() {
    return gulp.src('source/javascript/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/javascript/'));
}

function moveBootstrap() {
    return gulp.src('source/assets/**')
    .pipe(gulp.dest('build/assets'))
}


exports.build = gulp.series(compilaSass, comprimeImagens, minificaHTML, minificaJS, moveBootstrap);
