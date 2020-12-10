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

let middlewaresCombined;

if (config.reduxDevTools) {
  middlewaresCombined = composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      loggerMiddleware
    )
  );
} else {
  middlewaresCombined = applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware
  );
}

export default function store() {
  return createStore(rootReducer(history), compose(middlewaresCombined));
}
