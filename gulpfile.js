const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');


gulp.task('sass', function () {
  return gulp.src('./**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
})

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./**/*.scss', gulp.series('sass'))
})


gulp.task('default', gulp.series('sass', 'serve'), function () { })