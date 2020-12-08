import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store';
import App from './modules/app/components/App';
import config from './config';
import auth from './modules/auth/utilities/authUtility';

axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const token = auth.getAccessToken();

if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const configuredStore = store();

ReactDOM.render(
  <Provider store={configuredStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
