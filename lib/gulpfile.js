const gulp = require('gulp');
const jsLint = require('./tasks/jsLint');

gulp.task('js-lint', jsLint);

gulp.task('lint', gulp.series(/* 'ts-lint', */'js-lint'));