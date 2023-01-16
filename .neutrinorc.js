const react = require('@neutrinojs/react');
const styles = require('@neutrinojs/style-loader');
const eslint = require('@neutrinojs/eslint');
const copy = require('@neutrinojs/copy');
const CompressionPlugin = require('compression-webpack-plugin');
const postcssLoader = require('postcss-loader');
module.exports = {
  use: [
    (neutrino) => {
      neutrino.use(
        eslint({
          // include: ['./src/*'],
          eslint: {
            baseConfig: {
              extends: ['eslint-config-react-app'],
              globals: {
                BASE_URL: false,
              },
            },
          },
        })
      );
    },
    react({
      presets: ['react-app'],
      publicPath: '/',
      html: {
        title:
          'HR Portal by Policy Bazaar - Manage your teams Medical Insurance!',
        template: require.resolve('./src/index.ejs'),
      },
      style: {
        test: /\.css$/i,
        loaders: [
          {
            loader: 'postcss-loader',
            useId: 'postcss',
          },
        ],
      },
      devServer: { port: 9001 },
      env: {
        BUILD_ENV: 'development',
      },
      babel: {
        presets: [
          'babel-preset-react-app',
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'usage',
              corejs: '3.6.5',
            },
          ],
        ],
      },
      targets: {
        browsers: ['defaults', 'ie 10'],
      },
    }),
    copy({
      patterns: [
        {
          from: 'src/fonts/*.otf',
          to: 'assets/[name].[ext]',
        },
        {
          from: 'src/fonts/*.woff',
          to: 'assets/[name].[ext]',
        },
        {
          from: 'src/fonts/*.woff2',
          to: 'assets/[name].[ext]',
        },
        {
          from: 'src/public/**.*',
          to: 'assets/[name].[ext]',
        },
      ],
    }),
    (neutrino) => {
    },
    (neutrino) => {
    },
  ],
};
