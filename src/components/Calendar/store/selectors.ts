import { Moment } from 'moment';

import { AppState } from 'store/state';
import { Calendar } from './state';
import { appointmentsByDaySelectors } from 'entities/appointmentsByDay';
import { timeSelectors } from 'entities/time/';
import { getStrings } from 'strings/selectors';
import { Day } from 'entities/time/state';

const getState = (state: AppState): Calendar => state.components.calendar;

const getSelectedMonthId = (state: AppState): string =>
  getState(state).selectedMonthId;

const getSelectedMonthMoment = (state: AppState): Moment =>
  timeSelectors.getMonthMoment(state, getSelectedMonthId(state));

const getSelectedMonthTitle = (state: AppState): string => {
  const moment = getSelectedMonthMoment(state);
  return moment ? moment.format('MMMM YYYY') : '';
};

const getSelectedMonthWeeks = (state: AppState): string[] =>
  timeSelectors.getMonthWeeksByOrder(state, getSelectedMonthId(state));

const getCurrentDayId = (state: AppState): string =>
  getState(state).currentDayId;

const getSelectedDayId = (state: AppState): string =>
  getState(state).selectedDayId;

const getSelectedDay = (state: AppState): Day =>
  timeSelectors.getDayById(state, getState(state).selectedDayId);

const getSelectedDayAppointmentIds = (state: AppState): string[] =>
  appointmentsByDaySelectors.getDayAppointmentIds(
    state,
    getState(state).selectedDayId
  );

const getDayDisplayDate = timeSelectors.getDayOfMonth;

const getIsCurrentDay = (state: AppState, dayId: string): boolean =>
  getCurrentDayId(state) === dayId;

const getIsSelectedDay = (state: AppState, dayId: string): boolean =>
  getSelectedDayId(state) === dayId;

const getIsDayInCurrentMonth = (state: AppState, dayId: string): boolean =>
  timeSelectors.getDayMonthId(state, dayId) === getSelectedMonthId(state);

const getHasAppointment = (state: AppState, dayId: string): boolean =>
  appointmentsByDaySelectors.getDayAppointmentIds(state, dayId).length > 0;

const getDayAbbreviations = (state: AppState): string[] => {
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

export default {
  getSelectedMonthId,
  getSelectedMonthMoment,
  getSelectedMonthTitle,
  getSelectedMonthWeeks,
  getCurrentDayId,
  getSelectedDayId,
  getSelectedDay,
  getSelectedDayAppointmentIds,
  getDayDisplayDate,
  getIsCurrentDay,
  getIsSelectedDay,
  getIsDayInCurrentMonth,
  getHasAppointment,
  getDayAbbreviations
};
