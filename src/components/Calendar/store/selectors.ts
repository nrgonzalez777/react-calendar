import { AppState } from 'store/state';
import { Calendar } from './state';
import { getMonthMoment, getMonthWeeksByOrder } from 'entities/time/selectors';
import { Moment } from 'moment';

export const getState = (state: AppState): Calendar => state.components.calendar;

export const getSelectedMonthId = (state: AppState): string =>
  getState(state).selectedMonthId;

export const getCurrentMonthMoment = (state: AppState): Moment =>
  getMonthMoment(state, getSelectedMonthId(state));

export const getCurrentMonthTitle = (state: AppState): string => {
  const moment = getCurrentMonthMoment(state);
  return moment ? moment.format('MMMM YYYY') : '';
};

export const getCurrentMonthWeeks = (state: AppState): string[] =>
  getMonthWeeksByOrder(state, getSelectedMonthId(state));

export const getCurrentDayId = (state: AppState): string =>
  getState(state).currentDayId;

export const getSelectedDayId = (state: AppState): string =>
  getState(state).selectedDayId;