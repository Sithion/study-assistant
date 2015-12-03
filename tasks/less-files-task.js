var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less-files',function(){
	gulp
		.src('./app/common/css/less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./app/common/css'));
})

module.exports = gulp; 