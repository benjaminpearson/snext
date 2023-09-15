const i18nConfig = require('./i18n.config');

module.exports = {
  devLanguage: i18nConfig.defaultLocale,
  languages: i18nConfig.locales.map((locale) => ({ name: locale })),
};
