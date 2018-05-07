function rewire(config, env) {
  const babelOptions = config.module.rules.find(conf => {
    return conf.loader && conf.loader.includes('babel-loader')
  }).options
  const babelrc = require(babelOptions.presets[0])
  babelrc.plugins = [
    // ['module-resolver', { root: ['src'] }],
    [
      'import-inspector',
      {
        // serverSideRequirePath: true,
        webpackRequireWeakId: true,
      },
    ],
    ['import', { libraryName: 'antd', style: false }],
    'lodash',
    'babel-plugin-idx',
    'tcomb',
    'transform-decorators-legacy',
  ].concat(babelrc.plugins || [])
  babelOptions.presets = babelrc

  const rewireLess = require('react-app-rewire-less')
  config = rewireLess(config, env)

  const rewireEslint = require('react-app-rewire-eslint');
  config = rewireEslint(config, env);

  const path = require('path')
  config.resolve.modules = [path.resolve('src')].concat(config.resolve.modules)

  return config
}

module.exports = rewire
