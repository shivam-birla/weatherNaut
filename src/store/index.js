import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = configureStore({
  reducer: rootReducer, // this was the missing piece
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
