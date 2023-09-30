const { src, dest, watch, series } = require ('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    // return src('style.scss')
    return src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(dest('css'));
}

function watchTask() {
    watch(['assets/sass/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);