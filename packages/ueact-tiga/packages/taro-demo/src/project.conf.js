module.exports = {
  projectName: 'demo',
  date: '2018-11-6',
  designWidth: 750,
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    },
  },
  weapp: {

  },
  h5: {
    sourceRoot: 'src',
    outputRoot: 'dist',
    publicPath: '/',
    // the directory contains images/fonts/media etc. files
    staticDirectory: 'static',
    // define global constants for application see https://webpack.js.org/plugins/define-plugin/
    defineConstants: {
    },
    // support functions
    module: {
      postcss: {
        // autoprefixer plugin config
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}
