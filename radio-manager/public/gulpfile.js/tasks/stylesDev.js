/**
 * @const {function} src - Creates a stream for reading from the file system.
 * @const {function} dest - Creates a stream for writing to the file system.
 */
const { src, dest } = require( "gulp" )

/**
 * @const {object} paths - Paths to all important files and folders.
 * @const {object} outputs - Output names of all compiled files.
 */
const { paths, outputs } = require( "../constants" )

/**
 * @const {module} sourcemaps - Creates a source map for a compiled file.
 */
const sourcemaps = require( "gulp-sourcemaps" )

/**
 * @const {module} sass - Compiles all SCSS files into CSS.
 */
const sass = require( "gulp-sass" )

/**
 * @const {module} rename - Renames a file.
 */
const rename = require( "gulp-rename" )

/**
 * Compile and bundle all SCSS files
 * into a single CSS file for development.
 *
 * @return {stream}
 */
function stylesDev()
{
  /*
    1.  Access the main source file.
        
    2.  Create a source map.
        
    3.  Compile all SCSS files into a single
        CSS file.
        
    4.  Save the source map.
        
    5.  Rename the CSS file to a specific name.
        
    6.  Output the CSS file into the destination
        folder.
  */
  return src( paths.scssEntry )
    .pipe( sourcemaps.init() )
    .pipe( sass().on( "error", sass.logError ) )
    .pipe( sourcemaps.write() )
    .pipe( rename( outputs.cssDev ) )
    .pipe( dest( paths.dest ) )
} // STYLES DEV
exports.stylesDev = stylesDev
