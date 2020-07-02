const path = require('path');
module.exports = {
  watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "application.js",
    path: path.resolve(__dirname, 'build')
  }
}
