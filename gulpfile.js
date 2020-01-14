const gulp = require('gulp');
const zip = require('gulp-zip');
const markdownPDF = require('gulp-markdown-pdf');
const del = require('del');
const path = require('path');

const { series } = gulp;

const cssPath = path.join(__dirname, 'css.css');

function makePDF(cb) {
    return gulp.src('*.md')
    .pipe(markdownPDF({
        cssPath: cssPath
    }))
    .pipe(gulp.dest('temp'));
}

function zipAll(cb) {
    return gulp.src('temp/*')
    .pipe(gulp.src('in/*', {allowEmpty: true}))
    .pipe(zip('Lotus.zip'))
    .pipe(gulp.dest('out'));
}

function cleanup(cb) {
    return del('temp');
}

exports.build = series(makePDF, zipAll, cleanup);
