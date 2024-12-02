const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const { i18nRewriter } = require('next-i18n-router');
const i18nConfig = require('./i18n.config');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: i18nRewriter(i18nConfig),
    };
  },
  eslint: {
    dirs: ['src', '.storybook'],
  },
};

module.exports = withVanillaExtract(nextConfig);
