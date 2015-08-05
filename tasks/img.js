var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var path = require('path');

var imgGlob = 'src/img/**/*';

gulp.task('build:img', function () {
  return gulp.src(imgGlob)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('watch:img', ['build:img'], function () {
  gulp.watch(imgGlob, ['build:img']);
});
