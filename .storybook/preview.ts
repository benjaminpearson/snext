import type { Preview } from '@storybook/react';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import { Provider } from './provider';
import viewports from './viewports';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports,
    },
  },
  decorators: [withThemeProvider(Provider as any)],
  initialGlobals: {
    selectedTheme: 'apac',
    themes: [
      {
        name: 'apac',
        color: '#0D3880',
        themeObject: { name: 'apac' },
      },
      {
        name: 'seekJobs',
        color: '#BE68E8',
        themeObject: { name: 'seekJobs' },
      },
      {
        name: 'wireframe',
        color: '#5A6881',
        themeObject: { name: 'wireframe' },
      },
    ],
  },
};

export default preview;
