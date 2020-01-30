import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// add GlobalStyle for every story
const GlobalStyleDecorator = (storyFn) => (
  <Router>
    <GlobalStyles />
    {storyFn()}
  </Router>
);
addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
