module.exports = {
  locales: ['en', 'id', 'th'],
  defaultLocale: 'en',
  localeDetector: () => {
    // Force locale detection to always result in english
    // Ref: https://github.com/i18nexus/next-i18n-router#custom-locale-detection-optional
    return 'en';
  },
};
