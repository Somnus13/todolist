import ReactDOM from 'react-dom';
import getRouter from './router/router';

import './a.sass';
import './utils/index';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  getRouter(),
  document.getElementById('root'),
);
