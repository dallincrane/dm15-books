const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');

var paths = {
  scripts: ['public/app.js', 'public/**/*.js', '!public/build.js'],
};

gulp.task('clean', function () {
  return del(['public/build.js']);
})

gulp.task('build', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(concat('build.js'))
    .pipe(gulp.dest('public'));
})

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['build']);
})
