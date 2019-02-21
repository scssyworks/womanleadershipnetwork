
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
// import rootSaga from '../sagas'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension';

const intialState = {
  yt_videos: [],
  loader: false,
  isMenuHidden: true
}

const sagaMiddleware = createSagaMiddleware()

let middlewares = [thunk, sagaMiddleware];

const store = createStore(rootReducer, intialState, composeWithDevTools(
  applyMiddleware(...middlewares)
))

// sagaMiddleware.run(rootSaga)

export default store;