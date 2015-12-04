var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('inject-html-files', ['less-files'], function (done) {

	var injectOptions = {
		ignorePath: 'app',
		addRootSlash: false
	};

	var scripts = [
		'./app/packages/jquery/dist/jquery.min.js',
		'./app/packages/bootstrap/dist/js/bootstrap.min.js',
		'./app/packages/angular/angular.min.js',
		'./app/packages/oclazyload/dist/ocLazyLoad.min.js',
		'./app/packages/angular-ui-router/release/angular-ui-router.min.js',
		'./app/packages/jquery/dist/jquery.min.js',
		'./app/app.module.js',
		'./app/app.config.js',
		'./app/**/*.controller.js'
	];

	var styles = [
		'./app/packages/bootstrap/dist/css/bootstrap.css'
	];

	gulp
		.src('./app/index.html')
		.pipe(inject(gulp.src(scripts, { read: false }), injectOptions))
		.pipe(inject(gulp.src(styles, { read: false }), injectOptions))
		.pipe(gulp.dest('./app'));

	done();
});