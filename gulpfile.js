var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('build_css', function() {
  return gulp.src('./src/css/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build_js', function() {
  return gulp.src(['./src/js/jquery-3.2.0.min.js','./src/js/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', function () {
  gulp.start('build_css');
  gulp.start('build_js');
  gulp.src('./src/fonts/*').pipe(gulp.dest('dist/fonts/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.scss', ['build_css']);
  gulp.watch('./src/js/*.js', ['build_js']);
})

gulp.task('default', ['build']);