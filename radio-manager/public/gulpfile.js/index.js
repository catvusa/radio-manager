/**
 * @const {function} series - Executes tasks in sequential order.
 * @const {function} parallel - Executes tasks simultaneously.
 */
const { series, parallel } = require( "gulp" )

/**
 * @const {function} scriptsDev - Compiles all JS files for development.
 */
const { scriptsDev } = require( "./tasks/scriptsDev" )

/**
 * @const {function} scriptsProd - Compiles all JS files for production.
 */
const { scriptsProd } = require( "./tasks/scriptsProd" )

/**
 * @const {function} stylesDev - Compiles all SCSS files for development.
 */
const { stylesDev } = require( "./tasks/stylesDev" )

/**
 * @const {function} stylesProd - Compiles all SCSS files for production.
 */
const { stylesProd } = require( "./tasks/stylesProd" )

/**
 * @const {function} track - Tracks the files changes on live.
 */
const { track } = require( "./tasks/track" )

/**
 * Export all the tasks.
 */
 
exports.default = series( parallel( scriptsDev, stylesDev ), track )

exports.buildDev = series( parallel( scriptsDev, stylesDev ), track )
exports.buildProd = parallel( scriptsProd, stylesProd )

exports.scriptsDev = scriptsDev
exports.scriptsProd = scriptsProd

exports.stylesDev = stylesDev
exports.stylesProd = stylesProd

exports.track = track
