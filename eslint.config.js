const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:storybook/recommended',
  ),
  {
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      'public/**/*',
      'src/e2e/test-results/**/*',
      'storybook-static/**/*',
      'playwright-report/**/*',
    ],
  },
  {
    rules: {
      'no-console': 2,
      'no-unexpected-multiline': 2,
      'block-scoped-var': 2,
      'default-case': 2,
      'dot-notation': 2,
      'guard-for-in': 2,
      'no-alert': 2,
      'no-caller': 2,
      'no-div-regex': 2,
      'no-else-return': 2,
      'no-eval': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-fallthrough': 2,
      'no-floating-decimal': 2,
      'no-implicit-coercion': 2,
      'no-implied-eval': 2,
      'no-iterator': 2,
      'no-labels': 2,
      'no-lone-blocks': 2,
      'no-loop-func': 2,
      'no-multi-str': 2,
      'no-new-func': 2,
      'no-new-wrappers': 2,
      'no-new': 2,
      'no-octal-escape': 2,
      'no-param-reassign': 2,
      'no-proto': 2,
      'no-return-assign': 2,
      'no-script-url': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-throw-literal': 2,
      'no-useless-call': 2,
      'no-void': 2,
      radix: 2,
      'vars-on-top': 2,
      yoda: 2,
      strict: [2, 'never'],
      'no-label-var': 2,
      'no-shadow': 2,
      'no-undef-init': 2,

      'no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'handle-callback-err': 2,
      'no-new-require': 2,
      'no-path-concat': 2,
      'no-process-exit': 2,
      'no-restricted-modules': 2,
      'no-sync': 2,
      'linebreak-style': [2, 'unix'],
      'no-lonely-if': 2,
      'no-nested-ternary': 2,
      'no-unneeded-ternary': 2,
      'spaced-comment': [2, 'always'],
      'no-var': 2,
      'object-shorthand': 2,
      'prefer-const': 2,
      'prefer-spread': 2,
      'prefer-template': 2,
    },
  },
  ...compat
    .extends('plugin:testing-library/react', 'plugin:jest-dom/recommended')
    .map((config) => ({
      ...config,
      files: ['src/**/*.[jt]s?(x)'],
      ignores: ['src/e2e/**/*.ts', 'src/**/*.stories.ts'],
    })),
  ...compat.extends('plugin:playwright/recommended').map((config) => ({
    ...config,
    files: ['src/e2e/**/*.ts'],
  })),
];
