import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as config from './config';
import rootReducer from './config/rootReducer';

export const history = createBrowserHistory();

const loggerMiddleware = createLogger();

let middlewaresCombined = applyMiddleware(
  routerMiddleware(history),
  thunkMiddleware
);

if (config.reduxDevTools === true) {
  middlewaresCombined = composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      loggerMiddleware
    )
  );
}

export default function store() {
  return createStore(rootReducer(history), compose(middlewaresCombined));
}
