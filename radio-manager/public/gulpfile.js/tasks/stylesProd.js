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
 * @const {module} sass - Compiles all SCSS files into CSS.
 */
const sass = require( "gulp-sass" )

/**
 * @const {module} cssnano - Minimizes a CSS file.
 */
const cssnano = require( "gulp-cssnano" )

/**
 * @const {module} rename - Renames a file.
 */
const rename = require( "gulp-rename" )

/**
 * Compile, bundle and minimize all SCSS files
 * into a single CSS file for production.
 *
 * @return {stream}
 */
function stylesProd()
{
  /*
    1.  Access the main source file.
        
    2.  Compile all SCSS files into a single
        CSS file.
           
    3.  Minimize the CSS file.
        
    4.  Rename the CSS file to a specific name.
           
    5.  Output the CSS file into the destination
        folder.
  */
  return src( paths.scssEntry )
    .pipe( sass().on( "error", sass.logError ) )
    .pipe( cssnano() )
    .pipe( rename( outputs.cssProd ) )
    .pipe( dest( paths.dest ) )
} // STYLES PROD
exports.stylesProd = stylesProd
