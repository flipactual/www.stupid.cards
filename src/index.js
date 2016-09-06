import React from 'react';
import {
  render,
} from 'react-dom';

import './reset.css';
import App from './App';

render(
  <App />,
  document.getElementsByTagName('main')[0]
);

/* eslint-disable no-console */
console.log('%c🃏', 'font-size: 64px;');
