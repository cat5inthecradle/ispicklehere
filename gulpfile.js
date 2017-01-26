const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const injectCss = require('gulp-style-inject');
const browserify = require('gulp-browserify');

gulp.task('html', () => {
  return gulp
    .src('src/**/*.html')
    .pipe(injectCss())
    .pipe(htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('js', () => {
  return gulp
    .src('src/app.js')
    .pipe(browserify({
        insertGlobals : true
      }))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['js', 'html']);
gulp.task('default', ['build']);
