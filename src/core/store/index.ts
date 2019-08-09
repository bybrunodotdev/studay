import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

/**
 * In this project the duck pattern structure is being used
 * know more: https://github.com/erikras/ducks-modular-redux
 */
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// All possible middleware should be included in this array.
const middlewares = [sagaMiddleware];

/**
 * @description Configuration redux-devtools-extension
 * Know more: https://github.com/zalmoxisus/redux-devtools-extension
 * Note: Eslint needs to be entered manually to stop alerting errors
 */

/* eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-anable */

// Know more: https://redux.js.org/api/createstore
const store = createStore(
  rootReducer,
  composeSetup(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
