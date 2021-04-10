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
 * @const {module} rename - Renames a file.
 */
const rename = require( "gulp-rename" )

/**
 * Compile and bundle all JS files
 * into a single JS file.
 *
 * @return {stream}
 */
function scriptsDev()
{
  /*
    1.  Access the main source file.
    
    2.  Compile and bundle all JS files with 
        Babel (starting from the entry). Due to
        the browser compatibility, we also need
        to compile "array-unsort" ES6 package.
        When debug is set to true, it creates
        source maps.
    
    3.  Rename the JS file to a specific name.
           
    4.  Output the JS file into the destination
        folder.
  */
  return src( paths.jsEntry )
    .pipe( bro(
      {
        debug: true,
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
    .pipe( rename( outputs.jsDev ) )
    .pipe( dest( paths.dest ) )
} // SCRIPTS DEV
exports.scriptsDev = scriptsDev
