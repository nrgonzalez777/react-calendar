import { combineReducers, Reducer } from 'redux';
import { AppState } from './state';
import components from '../components';
import entities from '../entities';
import strings from '../strings';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  components,
  entities,
  strings,
});
