/**
 * @const {object} paths – Paths to all important files and folders.
 */
const paths =
{
  current: "./",
  html: "./index.html",
  scss: "./src/styles/**/*.scss",
  js: "./src/scripts/**/*.js",
  jsEntry: "./src/scripts/index.js",
  dest: "./dist",
}
exports.paths = paths

/**
 * @const {object} outputs – Output names of all compiled files.
 */
const outputs =
{
  scss: "rm-styles.min.css",
  js: "rm-scripts.min.js",
}
exports.outputs = outputs
