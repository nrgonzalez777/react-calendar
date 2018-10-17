import { Moment } from 'moment';

import { AppState } from 'store/state';
import { Calendar } from './state';
import {
  getDayAppointmentIdsAsArray,
  getDayById,
  getDayMonthId,
  getDayOfMonth,
  getMonthMoment,
  getMonthWeeksByOrder
} from 'entities/time/selectors';
import { getStrings } from 'strings/selectors';
import { Day } from 'entities/time/state';

export const getState = (state: AppState): Calendar =>
  state.components.calendar;

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

export const getDayDisplayDate = getDayOfMonth;

export const getIsCurrentDay = (state: AppState, dayId: string): boolean =>
  getCurrentDayId(state) === dayId;

export const getIsSelectedDay = (state: AppState, dayId: string): boolean =>
  getSelectedDayId(state) === dayId;

export const getIsDayInCurrentMonth = (
  state: AppState,
  dayId: string
): boolean => getDayMonthId(state, dayId) === getSelectedMonthId(state);

export const getHasAppointment = (state: AppState, dayId: string): boolean =>
  getDayAppointmentIdsAsArray(state, dayId).length > 0;

export const getDayAbbreviations = (state: AppState): string[] => {
  const abbrs = getStrings(state).dayAbbr;
  return [
    abbrs.sunday,
    abbrs.monday,
    abbrs.tuesday,
    abbrs.wednesday,
    abbrs.thursday,
    abbrs.friday,
    abbrs.saturday
  ];
};
