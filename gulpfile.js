const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('recarregar', () => {
    browserSync.init({server: './'});
});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('observar', () => {
    //executa a tarefa concatenar.js quando ocorrem modificações no arquivo scripts.js
    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['index.html', 'css/main.css'], browserSync.reload);
});

gulp.task('default', ['sass', 'recarregar', 'observar']);
