/**
 * @const {function} series – Executes tasks in sequential order.
 */
const { series } = require( "gulp" )

/**
 * @const {function} scripts – Compiles all JS files.
 */
const { scripts } = require( "./tasks/scripts" )

/**
 * @const {function} styles – Compiles all SCSS files.
 */
const { styles } = require( "./tasks/styles" )

/**
 * @const {function} track – Tracks the files changes on live.
 */
const { track } = require( "./tasks/track" )

/**
 * Create all the tasks.
 */
exports.default = series(scripts, styles, track)
exports.scripts = scripts
exports.styles = styles
exports.track = track
