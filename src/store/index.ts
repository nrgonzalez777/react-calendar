import { combineReducers, Reducer } from 'redux';
import { AppState } from './state';
import entities from '../entities';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  entities,
});
