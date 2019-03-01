import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getRouter from './router';
import configureStore from './configureStore';

import './static/style.scss';

const store = configureStore();

render(
  <Provider store={store}>
    {getRouter()}
  </Provider>,
  document.getElementById('root'),
);
