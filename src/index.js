import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './app/store/configureStore';

import routes from './app/routes';
import './index.scss';

const store = configureStore();
window.store = store;

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);

