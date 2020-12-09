import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store';
import * as config from './config';
import auth from './modules/auth/utilities/authUtility';
import App from './modules/app/components/App';

axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.common['Content-Type'] = config.contentType;

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
