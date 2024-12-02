import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    '@storybook/addon-a11y',
    'storybook-addon-theme-provider',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {},
  webpackFinal: async (existingConfig) => {
    return {
      ...existingConfig,
      resolve: {
        ...existingConfig.resolve,
        plugins: (existingConfig.resolve?.plugins || []).concat([
          new TsconfigPathsPlugin(),
        ]),
      },
    };
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
