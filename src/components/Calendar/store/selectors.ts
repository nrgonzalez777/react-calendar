import { AppState } from 'store/state';
import { Calendar } from './state';
import { getMonthMoment, getMonthWeeksByOrder } from 'entities/time/selectors';
import { Moment } from 'moment';

export const getState = (state: AppState): Calendar => state.components.calendar;

export const getCurrentMonthId = (state: AppState): string =>
  getState(state).currentMonthId;

export const getCurrentMonthMoment = (state: AppState): Moment =>
  getMonthMoment(state, getCurrentMonthId(state));

export const getCurrentMonthTitle = (state: AppState): string => {
  const moment = getCurrentMonthMoment(state);
  return moment ? moment.format('MMMM YYYY') : '';
};

export const getCurrentMonthWeeks = (state: AppState): string[] =>
  getMonthWeeksByOrder(state, getCurrentMonthId(state));