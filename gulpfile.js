var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('build_css', function() {
  return gulp.src('./src/css/*')
    .pipe(concat('all.css'))
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', function () {
  gulp.start('build_css');
  gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts/'));
  gulp.src('src/js').pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/css/*.scss', ['build_css']);
})

gulp.task('default', ['build']);