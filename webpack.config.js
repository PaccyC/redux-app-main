const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'app.js', // Output bundle filename
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve content from the dist directory
    },
    port: 9000, // Specify the port to run your development server on
  },
  mode: "development"
};
