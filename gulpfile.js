var gulp = require('gulp');
var scss = require('gulp-sass');
var minify = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();


gulp.task('scss', function(){
  return gulp.src('assets/scss/main.scss')
    .pipe(scss())
    .pipe(minify())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function(){
	browserSync.init({
        server: {
           baseDir: "./",
        }
    });
    gulp.watch('assets/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
});

gulp.task('build', gulp.series(['scss']));
