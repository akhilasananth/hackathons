'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const ngAnnotate = require('gulp-ng-annotate');
const sourcemaps = require("gulp-sourcemaps");

gulp.task('serve', [], function () {
    browserSync.init({
        server: {
            baseDir: 'src/'
        },
        port: 8080
    });
    gulp.watch('src/**/*.html', ['reload']);
    gulp.watch('src/**/*.js', ['reload']);
    gulp.watch(['src/**/*.css'], ['reload']);
});

gulp.task('reload', function () {
    browserSync.reload();
});