import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import getRouter from './router/router';

const App = () => (
  <Provider store={store}>
    {getRouter()}
  </Provider>
);

export default App;
