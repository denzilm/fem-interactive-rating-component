import path from 'node:path';
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

type Configuration = WebpackConfiguration & WebpackDevServerConfiguration;

const config: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: { publicPath: '/' },
  entry: './src/index.tsx',
  devServer: {
    static: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    port: 3000,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html', favicon: 'public/favicon.ico' }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new ESLintWebpackPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx'] })
  ]
};

export default config;
