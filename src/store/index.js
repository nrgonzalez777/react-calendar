// @flow

import { combineReducers, Reducer } from 'redux';
import { IAppState } from './state';
import entities from '../entities';

const reducer: Reducer<IAppState> = combineReducers({
  entities,
});

export default reducer;
