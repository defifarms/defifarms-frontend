const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
const withFonts = require("next-fonts");
const { i18n } = require("./next-i18next.config");
module.exports = withPlugins([[withSass], [withImages], [withFonts]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  i18n,
});
