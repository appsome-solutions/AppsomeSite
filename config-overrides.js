/* config-overrides.js */

module.exports = function override(config) {
  //do stuff with the webpack config...
  config.module.rules[0].parser.requireEnsure = true;
  return config;
};
