const path = require('path');
 
 module.exports = {
   entry: [
       './src/index.js',
       './src/pages/crearLecciones/crearLecciones.js',
       './src/styles.css'
 ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {loader: "script-loader"
       }
      },
    ],
  },
 };