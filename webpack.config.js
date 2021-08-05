const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chat.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.html'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'utils':  path.resolve(__dirname, 'src/utils'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'store': path.resolve(__dirname, 'src/store'),
    },
  },
  devServer: {
    historyApiFallback: {
      index: '/dist/index.html'
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.html', //source
    }),
  ],
};
