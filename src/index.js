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

/* eslint-disable no-console, max-len */
setTimeout(() => {
  console.log('%cCome on let’s get this psychic junk over with!', 'font-weight: bold;');
  console.log('%chttps://www.flipactual.com', 'font-weight: bold;');
}, 1000);
