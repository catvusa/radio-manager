/**
 * @const {module} browserify – Analyzes all the require() calls and bundles JS files.
 */
const browserify = require( "browserify" )

/**
 * @const {object} paths – Paths to all important files and folders.
 * @const {object} outputs – Output names of all compiled files.
 */
const { paths, outputs } = require( "../constants" )

/**
 * @const {module} babelify – Compiles all JS files with Babel.
 */
const babelify = require( "babelify" )

/**
 * @const {module} source – Converts a text stream to a vinyl stream.
 */
const source = require( "vinyl-source-stream" )

/**
 * @const {module} buffer – Converts a vinyl stream to be buffered.
 */
const buffer = require( "vinyl-buffer" )

/**
 * @const {module} sourcemaps – Creates a source map for a compiled file.
 */
const sourcemaps = require( "gulp-sourcemaps" )

/**
 * @const {module} terser – Minimizes a JS file.
 */
const terser = require( "gulp-terser" )

/**
 * @const {function} dest – Creates a stream for writing to the file system.
 */
const { dest } = require( "gulp" )

/**
 * Compiles, builds and minimizes all JS files
 * into a single JS file.
 *
 * @return {stream}
 */
function scripts()
{
  /*
    1.  Analyze all the require() calls (starting
        from the entries). When debug is true, it
        creates a source map.
        
    2.  Compile all JS files with Babel (starting
        from the entries). It transforms all
        import statements into the require() calls.
        These calls are understable by the Node.js,
        but not by a browser. This happens before
        analyzing the require() calls. To add,
        due to the browser compatibility, we also
        need to compile „array-unsort“ ES6 package.
        
    3.  Bundle the JS files and their dependencies
        into a single JS file. Returns a readable
        stream (-> text), that is different from
        the Gulp streams (-> vinyl). This happens
        after analyzing the require() calls.
           
    4.  Convert the stream returned by the bundle()
        (-> text) to the Gulp stream (-> vinyl)
        so we can use another Gulp plugins that
        supports streaming.

    5.  Convert the Gulp stream (-> vinyl) to be
        buffered for plugins that do not support
        streaming.

    6.  Create a source map.
        
    7.  Minimize the JS file.
        
    8.  Save the source map to a specific folder
        relative to a destination folder.
           
    9.  Output the JS file into the destination
        folder.
  */
  return browserify(
    {
      entries:
      [
        paths.jsEntry
      ],
      debug: true,
    },
  )
  .transform(
    babelify,
    {
      global: true,
      exclude: [ /node_modules\\(?!(array-unsort))/ ],
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
  )
  .bundle()
  .pipe( source( outputs.js ) )
  .pipe( buffer() )
  .pipe( sourcemaps.init(
    {
      loadMaps: true,
    },
  ) )
  .pipe( terser() )
  .pipe( sourcemaps.write( paths.current ) )
  .pipe( dest( paths.dest ) )
} // SCRIPTS
exports.scripts = scripts
