var gulp = require('gulp');

var inputs = {
  coffee: 'src/coffee/**/*.coffee',
  img:    'src/img/**/*',
  scss:   'src/scss/**/*.scss'
};

var outputs = {
  css: 'app/css',
  img: 'app/img',
  js:  'app/js'
};

gulp.task('default', [], function() {
  console.log(inputs, outputs)
});
