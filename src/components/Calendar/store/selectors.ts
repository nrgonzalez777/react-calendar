import { AppState } from 'store/state';
import { Calendar } from './state';
import { Month } from 'entities/time/state';
import { getMonthByIdOrDefault } from 'entities/time/selectors';

export const getState = (state: AppState): Calendar => state.components.calendar;

export const getCurrentMonthId = (state: AppState): string =>
 getState(state).currentMonthId;

export const getCurrentMonth = (state: AppState): Month =>
  getMonthByIdOrDefault(state, getCurrentMonthId(state));

export const getCurrentMonthWeeks = (state: AppState): string[] =>
  getCurrentMonth(state).weeksByOrder || [];