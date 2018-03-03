import { combineReducers, Reducer } from 'redux';
import { AppState } from './state';
import entities from '../entities';
import strings from '../strings';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  entities,
  strings,
});
