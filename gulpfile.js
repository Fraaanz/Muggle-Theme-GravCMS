var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

var cssInputAll = 'scss/**/*.scss';
var cssOutput = 'css-min';
var cssOutputAll = 'css-min/**/*.css';


gulp.task('styles', () => {
    return gulp.src(cssInputAll)
    .pipe(sass().on('error', sass.logError)).pipe(gulp.dest(cssOutput));
});

gulp.task('clean', () => {
    return del([cssOutputAll,]);
});

gulp.task('minify-css', () => {
  return gulp.src('css-min/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css-min'));
});

gulp.task('default', function(){
  gulp.watch(cssInputAll, gulp.series(['clean', 'styles', 'minify-css']));
});