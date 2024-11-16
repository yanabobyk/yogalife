// const gulp = require('gulp');

export const fonts = () => {
  return app.gulp.src('src/fonts/**/*.{ttf,woff,woff2,eot,svg}')
    .pipe(app.gulp.dest('dist/fonts/'));
};