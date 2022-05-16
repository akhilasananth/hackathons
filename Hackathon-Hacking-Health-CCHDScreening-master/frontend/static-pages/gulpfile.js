var gulp = require('gulp'),

browserSync = require('browser-sync');

gulp.task('default', function() {

console.log('Hello Gulp');

});

gulp.task('watch', function (gulpCallback) {
    browserSync.init({
        server: './',
        port:8081
    }, function callback() {
        // Monitor html and Javascript and reload browsers when it changes
        gulp.watch('./index.html', browserSync.reload);

        // watch css and stream to BrowserSync when it changes
        gulp.watch('./css/*', function () {
            // grab css files and send them into browserSync.stream
            // this injects the css into the page
            gulp.src('./css/*')
                .pipe(browserSync.stream());
        });

        // notify gulp that this task is done
        gulpCallback();
    });
});