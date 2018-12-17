import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './a.sass';
import './utils/index';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
