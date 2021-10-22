const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({
    filename: 'styles.css'
  });

  return {
    entry: ['./src/app.js'],
    output: {
      publicPath: '/dist',
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias : {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src', 'components')
      }
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.(js|jsx)$/,
          include: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules', 'foundation-sites')
          ]
        }, 
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            },
            {
              loader: 'import-glob-loader',
              options: {
                sourceMap: true
              }
            }
          ],
        }
      ]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        'process.env.GMAIL_ACCOUNT': JSON.stringify(process.env.GMAIL_ACCOUNT),
        'process.env.GMAIL_PASSWORD': JSON.stringify(process.env.GMAIL_PASSWORD),
        'process.env.USER_ID': JSON.stringify(process.env.USER_ID),
        'process.env.FIREBASE_LOGIN': JSON.stringify(process.env.FIREBASE_LOGIN),
        'process.env.FIREBASE_PASSWORD': JSON.stringify(process.env.FIREBASE_PASSWORD)
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      compress: true,
      open: true,
    }
  };
};
