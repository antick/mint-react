import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export const history = createBrowserHistory();

export default function store() {
  return createStore(
    rootReducer(history),
    compose(
      composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history),
          thunkMiddleware,
          loggerMiddleware
        )
      )
    )
  );
}
