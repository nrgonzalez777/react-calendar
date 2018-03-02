// @flow

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './index';
import { IAppState } from './state';

const middleware = [thunk];

export default (): Store<IAppState> =>
  createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

