/**
 * @const {object} paths - Paths to all important files and folders.
 */
const paths =
{
  current: "./",
  html: "./index.html",
  scss: "./src/styles/**/*.scss",
  scssEntry: "./src/styles/styles.scss",
  js: "./src/scripts/**/*.js",
  jsEntry: "./src/scripts/index.js",
  dest: "./dist",
}
exports.paths = paths

/**
 * @const {object} outputs - Output names of all compiled files.
 */
const outputs =
{
  cssDev: "rm-styles.css",
  cssProd: "rm-styles.min.css",
  jsDev: "rm-scripts.js",
  jsProd: "rm-scripts.min.js",
}
exports.outputs = outputs
