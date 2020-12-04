/**
 * @const {function} src – Creates a stream for reading from the file system.
 * @const {function} dest – Creates a stream for writing to the file system.
 */
const { src, dest } = require( "gulp" )

/**
 * @const {object} paths – Paths to all important files and folders.
 * @const {object} outputs – Output names of all compiled files.
 */
const { paths, outputs } = require( "../constants" )

/**
 * @const {module} sourcemaps – Creates a source map for a compiled file.
 */
const sourcemaps = require( "gulp-sourcemaps" )

/**
 * @const {module} sass – Compiles all SCSS files into CSS.
 */
const sass = require( "gulp-sass" )

/**
 * @const {module} cssnano – Minimizes a CSS file.
 */
const cssnano = require( "gulp-cssnano" )

/**
 * @const {module} rename – Renames a file.
 */
const rename = require( "gulp-rename" )

/**
 * Compiles, builds and minimizes all SCSS files
 * into a single CSS file.
 *
 * @return {stream}
 */
function styles()
{
  /*
    1.  Access the source files.
        
    2.  Create a source map.
        
    3.  Compile all SCSS files into a single
        CSS file.
           
    4.  Minimize the CSS file.
        
    5.  Rename the CSS file to a specific name.
        
    6.  Save the source map to a specific folder
        relative to a destination folder.
           
    7.  Output the CSS file into the destination
        folder.
  */
  return src( paths.scss )
    .pipe( sourcemaps.init() )
    .pipe( sass().on( "error", sass.logError ) )
    .pipe( cssnano() )
    .pipe( rename( outputs.scss ) )
    .pipe( sourcemaps.write( paths.current ) )
    .pipe( dest( paths.dest ) )
} // STYLES
exports.styles = styles
