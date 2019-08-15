// const babelOptions = {
//   "presets": ["es2015","react", "stage-0"]
// };

const babelOptions = {
  "presets": []
};
const autoprefixer = require("autoprefixer")

module.exports = {
  entry: "./src/index",
  output: {
    filename: "./dist/bundle.js",
    path: __dirname
  },
  module: {
    rules: [
      //   {
      //     test: /\.ts(x?)$/,
      //     exclude: /node_modules/,
      //     use: [
      //       {
      //         loader: "babel-loader",
      //         options: babelOptions
      //       },
      //
      //       {
      //         loader: "ts-loader"
      //       }
      //       ,
      //       {
      //         loader: "tslint-loader",
      //         options: tsLintConfig
      //
      //       }
      //     ]
      // },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader",
            options: {
              // eslint options (if necessary)
            }
          }
        ]
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [autoprefixer("last 5 versions")]
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [autoprefixer("last 5 versions")]
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
        // loader: "style-loader!css-loader!postcss-loader!sass-loader"
      }

    ]
  },
  resolve: {
    extensions: [".jsx", ".js", "json"]
  },
  devServer: {
    host: "localhost",
    port: 8080,
    disableHostCheck: true,
    historyApiFallback: { //https://github.com/ReactTraining/react-router/issues/3409
      disableDotRule: true
    }

  }
};