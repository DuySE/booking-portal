/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { REHYDRATE_COMPLETE } from '../reducers';
import rootSagas from '../sagas';
import migrations from './migration';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  whitelist: ['auth'],
  key: 'root',
  storage,
  version: 0,
  migrate: createMigrate(migrations, { debug: true }),
  debug: true,
};

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  /* eslint-enable */

  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composeEnhancers(...enhancers),
  );

  const persistor = persistStore(store, null, () => store.dispatch({ type: REHYDRATE_COMPLETE }),);

  // start sagas
  sagaMiddleware.run(rootSagas);

  return { store, persistor };
}
