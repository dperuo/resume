var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');



// --------------- PATHS --------------- //
var inputs = {
  img:  'src/img/**/*',
  scss: 'src/scss/**/*.scss',
  ts:   'src/coffee/**/*.ts'
};

var outputs = {
  css: 'app/css',
  img: 'app/img',
  js:  'app/js'
};



// --------------- TASKS --------------- //
gulp.task('scss', function () {
  gulp.src(inputs.scss)
    .pipe(sass({style: 'compressed'}))
    .pipe(gulp.dest(outputs.css))
});

// gulp.task('default', ['scss'], function() {
//   gulp.watch(inputs.scss, ['scss'])
// });

gulp.task('default', function () {
  console.log (inputs, outputs);
});
