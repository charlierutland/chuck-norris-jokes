import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'normalize.css';
import './index.css';
import { Dashboard } from './components/dashboard';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
);

// TODO: Eject webpack and make sure build works.
