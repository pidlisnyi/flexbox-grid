var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');

 
gulp.task('sass', function () {
  return gulp.src('./src/**/*.sass')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
});

gulp.task('scss', function () {
  return gulp.src('./src/**/*.scss')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.sass', ['sass']);
});

gulp.task('less', function () {
  return gulp.src('./src/*.less')
      .pipe(less())
      .pipe(gulp.dest('./dist'));
});
