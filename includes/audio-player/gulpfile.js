const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');

// ========================================

// Compile SCSS into CSS
function style()
{
	// Use Sass
    return gulp.src('src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
} // STYLE
exports.style = style;

// ========================================

// Show file changes live in the browser
function watch()
{
	// Start a local web server
    browserSync.init({
        server: {
           baseDir: './',
           index: '/index.html'
        }
    });
	
	style();
	
	// Watch these files
    gulp.watch('./src/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
} // WATCH
exports.watch = watch;

// ========================================

// Minimize all CSS or JS files into a single file
function minimize()
{
	return gulp.src('./*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
} // MINIMIZE
exports.minimize = minimize;
