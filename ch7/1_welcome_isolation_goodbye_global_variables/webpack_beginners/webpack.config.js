const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = "development";

module.exports = {
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
    overlay: true
  },
  watch: true,
  mode: mode,
  devtool: "cheap-module-eval-source-map",
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  entry: {
    application: "./src/javascripts/index.js",
    admin: "./src/javascripts/admin.js"
  },
  output: {
    filename: mode === 'production' ? "[name]-[contenthash].js" : '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          // 'style-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                overrideBrowserslist: ['last 3 versions', 'ie >9']
                })
              ]
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          // 'style-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                overrideBrowserslist: ['last 3 versions', 'ie >9']
                })
              ]
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: mode === "production" ? "[name]-[hash:7].[ext]" : "[name].[ext]"
            },
          },
          { loader: 'image-webpack-loader' }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new WebpackManifestPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: mode === 'production' ? "[name]-[contenthash].css" : '[name].css',
    })
  ],
  resolve: {
    alias: {
      CssFolder: path.resolve(__dirname, 'src/stylesheets/')
    },
    modules: [path.resolve(__dirname, 'src/downloaded_libs'), 'node_modules']
  }
}
