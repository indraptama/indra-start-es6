module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: "./dist/js",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    contentBase: "./dist"
  },
  module: {
    loader: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets:['es2015','react']
        }
      },
      {
        test: /\.css$/,
        exclude:/(node_modules|bower_components)/,
        loader: 'style-loader!css-loader!postcss-loader'

      }
    ]
  }
};
