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
 * @const {module} bro - Bundles all JS files into a single one.
 */
const bro = require( "gulp-bro" )

/**
 * @const {module} terser - Minimizes a JS file.
 */
const terser = require( "gulp-terser" )

/**
 * @const {module} rename - Renames a file.
 */
const rename = require( "gulp-rename" )

/**
 * Compile, bundle and minimize all JS files
 * into a single JS file.
 *
 * @return {stream}
 */
function scriptsProd()
{
  /*
    1.  Access the main source file.
    
    2.  Compile and bundle all JS files with 
        Babel (starting from the entry). Due to
        the browser compatibility, we also need
        to compile „array-unsort“ ES6 package.
    
    3.  Minimize the JS file.
    
    4.  Rename the JS file to a specific name.
           
    5.  Output the JS file into the destination
        folder.
  */
  return src( paths.jsEntry )
    .pipe( bro(
      {
        transform:
        [
          [
            "babelify",
            {
              global: true,
              ignore: [ /node_modules\\(?!(array-unsort))/ ],
              presets:
              [
                "@babel/preset-env",
                "@babel/preset-react",
              ],
              plugins:
              [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime",
              ],
            },
          ],
        ],
      },
    ) )
    .pipe( terser() )
    .pipe( rename( outputs.jsProd ) )
    .pipe( dest( paths.dest ) )
} // SCRIPTS PROD
exports.scriptsProd = scriptsProd
