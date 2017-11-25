import reduxDevTools from 'remote-redux-devtools';
import thunkMiddleware from 'redux-thunk';
import configuration from '../config/config.json';
import reducers from './reducers';
import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';

const immutify = obj => {
  const mutable = {};
  fromJS(obj).forEach((value, key) => (mutable[key] = value));
  return mutable;
};

const configureStore = (state = {}, middlewares = [], reducers = r => r, devTools = f => f) => {
  state = immutify(state);
  middlewares = compose(applyMiddleware(...middlewares), devTools);
  return createStore(reducers, state, middlewares);
};
const initialState = { configuration };
const middlewares = [thunkMiddleware];
const devTools = reduxDevTools({ hostname: 'localhost', port: 5678 });

export default configureStore(initialState, middlewares, reducers, devTools);
