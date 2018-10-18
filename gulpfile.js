const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('recarregar', () => {
    browserSync.init({server: './'});
    gulp.watch(['index.html', 'css/main.css'], browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

gulp.task('observar', () => {
    //executa a tarefa concatenar.js quando ocorrem modificações no arquivo scripts.js
    gulp.watch(['scss/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'recarregar', 'observar']);
