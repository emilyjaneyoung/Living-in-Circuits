var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	sourcemaps = require('gulp-sourcemaps'),
	paths = {
		scripts: [
			'src/js/vendor/*.js',
			'src/js/*.js'
		],
		images: [
			'img/*'
		],
		sass: [
			'src/scss/*.scss',
			'src/scss/vendor/*.scss',
			'src/scss/helpers/*.scss',
			'src/scss/base/*.scss',
			'src/scss/important/*.scss',
			'src/scss/layout/*.scss',
			'src/scss/modules/*.scss',
			'src/scss/state/*.scss',
			'src/scss/theme/*.scss'
		],
	},
	onError = function (err) {
		gutil.beep();
		console.log(err);
	};

// Sass
gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sourcemaps.init())
    	.pipe(sass({errLogToConsole: true}))
        .pipe(prefix(["last 2 version", "> 1%", "Firefox ESR", "ie 8"], { cascade: true, safe: true, map: true, to: './style.css' }))
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});

// JavaScript
gulp.task('js', function () {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(plumber({errorHandler: onError}))
		.pipe(uglify({mangle: true}))
		.pipe(concat('base.min.js'))
		.pipe(gulp.dest('js'));
});

// Image Minify
gulp.task('img', function () {
	return gulp.src(paths.images)
		.pipe(imagemin({ progressive: true, }))
		.pipe(gulp.dest('img'))
});

// Watch Files
gulp.task('watch', function () {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.scripts, ['js']);
	gulp.watch(paths.images, ['img']);
});

// Default
gulp.task('default', ['sass', 'js', 'img', 'watch']);
