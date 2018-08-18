import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import Reducers from './reducers/index.js';

const configStore = () => {
  return createStore(Reducers, applyMiddleware(promiseMiddleware));
}

export default configStore;
