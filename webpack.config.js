var path = require('path');
module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.svg$/,
        use: 'svg-url-loader',
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'url-loader',
      },
    ]
  },
};
