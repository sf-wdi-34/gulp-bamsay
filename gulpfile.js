var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require("gulp-sass");
var watch = require('gulp-watch');
var connect = require('gulp-connect');

//define a task with the name of 'default'
// and a callback to perform when the task is ran
gulp.task('default', function() {
  console.log('I am the default task!');
});

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function () {
  return gulp.src('./css/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'))
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
});

gulp.task('default', ['sass', 'connect', 'watch']);
