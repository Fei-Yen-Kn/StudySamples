
const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  publicPath: '/',
  outputDir: path.resolve(__dirname, 'dist'),
  assetsDir: 'assets',
};