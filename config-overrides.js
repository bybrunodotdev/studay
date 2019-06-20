/* eslint-disable import/no-extraneous-dependencies */
const { override, addBabelPlugins, disableEsLint } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  ...addBabelPlugins([
    'babel-plugin-root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ]),
);
