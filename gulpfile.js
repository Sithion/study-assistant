var gulp = require('gulp');
require('require-dir')("tasks");


gulp.task('default', ['inject-html-files','less-files-watch','nodemon']);


