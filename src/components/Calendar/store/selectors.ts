import { AppState } from 'store/state';
import { Calendar } from './state';
import {
  getMonthMoment,
  getMonthWeeksByOrder,
  getDayAppointmentIdsAsArray,
  getDayById
} from 'entities/time/selectors';
import { Moment } from 'moment';
import { Day } from 'entities/time/state';

export const getState = (state: AppState): Calendar => state.components.calendar;

export const getSelectedMonthId = (state: AppState): string =>
  getState(state).selectedMonthId;

export const getSelectedMonthMoment = (state: AppState): Moment =>
  getMonthMoment(state, getSelectedMonthId(state));

export const getSelectedMonthTitle = (state: AppState): string => {
  const moment = getSelectedMonthMoment(state);
  return moment ? moment.format('MMMM YYYY') : '';
};

export const getSelectedMonthWeeks = (state: AppState): string[] =>
  getMonthWeeksByOrder(state, getSelectedMonthId(state));

export const getCurrentDayId = (state: AppState): string =>
  getState(state).currentDayId;

export const getSelectedDayId = (state: AppState): string =>
  getState(state).selectedDayId;

export const getSelectedDay = (state: AppState): Day =>
  getDayById(state, getState(state).selectedDayId);

export const getSelectedDayAppointments = (state: AppState): string[] =>
  getDayAppointmentIdsAsArray(state, getState(state).selectedDayId);