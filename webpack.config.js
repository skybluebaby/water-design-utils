const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTSCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: './src/index.d.ts', to: './index.d.ts' }],
    }),
  ],
};
