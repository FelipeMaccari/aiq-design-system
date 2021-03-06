import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from '../src/global/styles';
import theme from '../src/providers/theme';

import { BrowserRouter } from 'react-router-dom'

import '../src/providers/initializeReactDate';
import ReactDatesOverrides from '../src/providers/styleReactDatesOverrides'
import themeStorybook from './theme';

function withTheme(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <ReactDatesOverrides/>
        <div id="app-root">
            {storyFn()}
        </div>
        <div id="modal-root"></div>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}


addParameters({
  options: {
    theme: themeStorybook,
  },
});

addDecorator(withTheme);