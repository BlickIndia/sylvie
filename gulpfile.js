var gulp = require('gulp'),
  config = require('./gulpfile.config'),
  requireDir = require('require-dir');

requireDir('./gulptasks');

gulp.task('build', [
  'build:bower',
  'build:styles',
  'build:js',
  'build:html',
  'copy:fonts',
  'copy:images'
]);

gulp.task('watch', function () {
  gulp.watch(config.paths.bower(''), ['build:bower']);
  gulp.watch(config.paths.src.styl, ['build:styles']);
  gulp.watch(config.paths.src.js, ['build:js']);
  gulp.watch(config.paths.src.templates, ['build:html']);
  gulp.watch(config.paths.src.fonts, ['copy:fonts']);
  gulp.watch(config.paths.src.img, ['copy:images']);
});

var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['build', 'webserver:run', 'webserver:reload', 'watch']);
