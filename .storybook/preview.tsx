import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/components';

const preview: Preview = {
  parameters: {
    favicon: '../public/favicon.ico',
    //to-do: Arrange the documents in the order mentioned
    options: {
      storiesSort: {
        order: [
          'Components',
          'Getting Started',
          ['Intro to Developers', 'Current Version'],
          '*',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default preview;
