var gulp = require('gulp'),
	del = require('del'),
	runSequence = require('run-sequence'),
	watch = require('gulp-watch'),
	header = require('gulp-header'),
	footer = require('gulp-footer'),
	mergeStream = require('merge-stream'),

	plugins = require('gulp-load-plugins')();

	ractiveParse = require('./tasks/ractiveParse.js'),
	ractiveConcatComponents = require('./tasks/ractiveConcatComponents.js'),
	generateDocs = require('./tasks/generateDocs.js'),
	renderDocumentation = require('./tasks/renderDocumentation.js'),
	fs = require('fs'),
	gulpWing = require('./tasks/gulpWing.js');

gulp.task('connect', function () {
	plugins.connect.server({
		root: 'public',
		livereload: true,
		port: 9080
	});
});

gulp.task('html', function () {
	return gulp.src('./public/*.html')
		.pipe(plugins.connect.reload());
});

gulp.task('copy-vendors', function () {

	return mergeStream(

		gulp.src([
			'./node_modules/ractive/ractive.min.js',
			'./node_modules/ractive/ractive.min.js.map',
			'./node_modules/jquery/dist/jquery.min.js',
			'./node_modules/jquery/dist/jquery.min.map',
			'./node_modules/lodash/lodash.min.js'
		])
		.pipe(gulp.dest('./public/js')),

		gulp.src([
			'node_modules/zurb-foundation-5/doc/assets/img/images/**/*'
		])
		.pipe(gulp.dest('public/images/'))

	);

});

gulp.task('clean', function (callback) {
	del([
		'public/**/*'
	], callback);
});

gulp.task('build-sass', function () {

	return mergeStream(

		gulp.src('./src/**/*.scss')
			.pipe(plugins.sass())
			.pipe(plugins.concat('components.css'))
			.pipe(gulp.dest('./public/css')),

		gulp.src('./node_modules/zurb-foundation-5/scss/*.scss')
			.pipe(plugins.sass())
			.pipe(gulp.dest('./public/css/foundation')),

		gulp.src('./src/index.html')
			.pipe(gulp.dest('./public/'))

	);

});

gulp.task('ractive-build-templates', function () {
	return gulp.src('./src/components/**/*.hbs')
		.pipe(ractiveParse({
			'prefix': 'RactiveF'
		}))
		.pipe(plugins.concat('templates.js'))
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('ractive-build-components', function () {
	return gulp.src('./src/components/**/*.js')
		.pipe(ractiveConcatComponents({
			'prefix': 'RactiveF'
		}))
		.pipe(plugins.concat('components.js'))
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('build-documentation', function () {
	return gulp.src('./src/components/**/*.md')
		.pipe(renderDocumentation())
		.pipe(plugins.concat('documentation.html'))
		.pipe(header(fs.readFileSync('tasks/documentation/header.html')))
		.pipe(footer(fs.readFileSync('tasks/documentation/footer.html')))
		.pipe(gulp.dest('./public/'));
});

gulp.task('concat-app', function () {
	return gulp.src([
			'./src/app.js',
			'./public/js/templates.js',
			'./public/js/components.js'
		])
		.pipe(plugins.concat('ractivef.js'))
		.pipe(gulp.dest('./public/js/'))
		.pipe(plugins.wrap({ src: './src/ractivef-cjs.js'}))
		.pipe(plugins.concat('ractivef-cjs.js'))
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('wing', function (callback) {
	gulpWing();
	callback();
});

gulp.task('build', ['clean'], function (callback) {
	runSequence([
		'build-sass',
		'ractive-build-templates',
		'ractive-build-components',
		'build-documentation'
	], [
		'copy-vendors',
		'concat-app'
	], callback);
});

gulp.task('watch', function () {

	plugins.watch([
		'src/*.html',
		'src/**/*.hbs',
		'src/**/*.md',
		'src/**/*.js',
		'src/**/*.scss',
		'tasks/**/*.js'
	], function () {
		runSequence('build', 'docs', 'html');
	});

});

gulp.task('docs', function () {
	return gulp.src('./src/docs.html')
		.pipe(generateDocs())
		.pipe(gulp.dest('./public/'));;
});

gulp.task('default', function (callback) {
	runSequence('build', 'docs', 'connect', 'watch', callback);
});
