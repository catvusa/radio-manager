const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const minimizeCSS = require('gulp-cssnano');
const minimizeJS = require('gulp-terser');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');

// ========================================

// Compile, build and minimize all SCSS files into a single CSS file
function styles()
{
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(minimizeCSS())
        .pipe(rename('rm-styles.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
} // STYLES
exports.styles = styles;

// ========================================

// Compile, build and minimize all JS files into a single JS file
function scripts()
{
    return browserify({
        entries: ['./src/js/init.js']
    }) // handle the modules, import them to the main script, bundle them all together
    .transform( babelify, {
        presets: ['@babel/env']
    }) // convert ES6 to plain JS readable by every browser
    .bundle() // bundle into the one single file
    .pipe(source('./src/js/init.js'))
    .pipe(rename('rm-scripts.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(minimizeJS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
} // SCRIPTS
exports.scripts = scripts;

// ========================================

// Show file changes live in the browser
function watch()
{
    // Start a local web server
    browserSync.init({
        server: {
           baseDir: './',
           index: './index.html'
        }
    });
    
    // Watch these files
    gulp.watch('./src/scss/*.scss').on('change', gulp.series(styles, browserSync.reload));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', gulp.series(scripts, browserSync.reload));
} // WATCH
exports.watch = gulp.series(styles, scripts, watch);
