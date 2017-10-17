var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// compile less
gulp.task('less', function() {
  gulp.src('./styles/default.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css/'));
});

// watch for changes
gulp.task('watch-less', function() {
  gulp.watch('./styles/*.less', ['less']);
});

// serve gulp
gulp.task('serve', function() {
  browserSync.init({
  	server: {
  		baseDir: "public/",
  		directory: true,
  		index: "index.html"
  	},
    port: 9000,
    open: false,
    notify: false,
  });
  gulp.watch("./styles/*.less").on("change", reload);
  gulp.watch("./public/*.html").on("change", reload);
});

// default command
gulp.task('default', ['watch-less', 'serve']);