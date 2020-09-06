var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

var cssInput = 'templates/**/style.scss';
var cssWatchAll = 'templates/**/*.scss';
var cssOutputDest = 'css';
var cssOutput = 'css/**/style.css';


gulp.task('styles', () => {
    return gulp.src(cssInput)
    .pipe(sass().on('error', sass.logError)).pipe(gulp.dest(cssOutputDest));
});

gulp.task('clean', () => {
    return del([cssOutput,]);
});

gulp.task('minify-css', () => {
  return gulp.src('css-min/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css-min'));
});

gulp.task('default', function(){
  gulp.watch(cssWatchAll, gulp.series(['clean', 'styles', 'minify-css']));
});