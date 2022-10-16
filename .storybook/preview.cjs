
import { themes } from '@storybook/theming';

import '../src/styles/global.css'

import { initialize, mswDecorator } from 'msw-storybook-addon';


initialize({
  onUnhandledRequest: 'bypass'
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  }
}


// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];