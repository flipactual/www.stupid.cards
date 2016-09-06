import React from 'react';
import {
  render,
} from 'react-dom';
import App from '../../src/App';

export default () => render(
  <App isMadGood />,
  document.body.appendChild(document.createElement('div'))
);
