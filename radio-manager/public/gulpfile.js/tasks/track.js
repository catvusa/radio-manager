/**
 * @const {module} browserSync – Creates a local web server.
 */
const browserSync = require( "browser-sync" ).create()

/**
 * @const {object} paths – Paths to all important files and folders.
 */
const { paths } = require( "../constants" )

/**
 * @const {function} watch – Watches files and reacts to changes.
 * @const {function} series – Executes tasks in sequential order.
 */
const { watch, series } = require( "gulp" )

/**
 * @const {function} scripts – Compiles all JS files.
 */
const { scripts } = require( "./scripts" )

/**
 * @const {function} styles – Compiles all SCSS files.
 */
const { styles } = require( "./styles" )

/**
 * Show all the HTML, SCSS and JS
 * file changes live in the browser.
 */
function track()
{
  /**
   * Start the local web server in the base
   * directory with the entry point.
   */
  browserSync.init(
    {
      server:
      {
        baseDir: paths.current,
        index: paths.html,
      }
    }
  )
    
  /**
   * Track the HTML, SCSS and JS files.
   */
  watch( paths.html ).on( "change", browserSync.reload )
  watch( paths.js ).on( "change", series( scripts, browserSync.reload ) )
  watch( paths.scss ).on( "change", series( styles, browserSync.reload ) )
} // TRACK
exports.track = track
