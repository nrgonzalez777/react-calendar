import { AppState } from 'store/state';
import { Day, Month, Time, Week } from './state';

export const getState = (state: AppState): Time => state.entities.time;

export const getMonthById = (state: AppState, monthId: string): Month =>
  getState(state).months[monthId];

export const getMonthByIdOrDefault = (state: AppState, monthId: string): Month =>
  getMonthById(state, monthId) || {};

export const getWeekById = (state: AppState, weekId: string): Week =>
  getState(state).weeks[weekId];

export const getWeekByIdOrDefault = (state: AppState, weekId: string): Week =>
 getWeekById(state, weekId) || {};

export const getDayById = (state: AppState, dayId: string): Day =>
  getState(state).days[dayId];

export const getDayByIdOrDefault = (state: AppState, dayId: string): Day =>
 getDayById(state, dayId) || {};