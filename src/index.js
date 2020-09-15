import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import config from './config';
import store, { history } from './utils/store';
import App from './components/App';

const configuredStore = store();

axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

ReactDOM.render(
  <Provider store={configuredStore}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
