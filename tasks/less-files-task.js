var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less-files',function(done){
	gulp
		.src('./app/common/css/less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('./app/common/css'));
	done();
})

gulp.task('less-files-watch', function(done){
	gulp.watch('./app/common/css/less/**/*.less', ['less-files'])
	done();
});

module.exports = gulp; 