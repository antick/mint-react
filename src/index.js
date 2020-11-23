import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import store, { history } from './utils/store';
import App from './components/App';
import config from './config';
import { auth } from './utils';

axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const token = auth.getAccessToken();

if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const configuredStore = store();

ReactDOM.render(
  <Provider store={configuredStore}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
