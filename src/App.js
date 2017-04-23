import React from 'react';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Album from './containers/Album';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, null, storeEnhancer);
sagaMiddleware.run(rootSaga);

export default () => (
  <Provider store={store}>
    <Album />
  </Provider>
);
