'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// const webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production') ?
//     require('./webpack.prod.conf') :
//     require('./webpack.dev.conf')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
