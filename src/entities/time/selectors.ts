import { AppState } from 'store/state';
import { Day, Month, Time, Week } from './state';
import { Moment } from 'moment';

export const getState = (state: AppState): Time => state.entities.time;

export const getMonthById = (state: AppState, monthId: string): Month =>
  getState(state).months[monthId];

export const getMonthByIdOrDefault = (state: AppState, monthId: string): Month =>
  getMonthById(state, monthId) || {};

export const getMonthWeeksByOrder = (state: AppState, monthId: string): string[] =>
  getMonthByIdOrDefault(state, monthId).weeksByOrder;

export const getMonthNumber = (state: AppState, monthId: string): number =>
  getMonthByIdOrDefault(state, monthId).monthNumber;

export const getMonthMoment = (state: AppState, monthId: string): Moment =>
  getMonthByIdOrDefault(state, monthId).moment;

export const getWeekById = (state: AppState, weekId: string): Week =>
  getState(state).weeks[weekId];

export const getWeekByIdOrDefault = (state: AppState, weekId: string): Week =>
  getWeekById(state, weekId) || {};

export const getWeekDaysByOrder = (state: AppState, weekId: string): string[] =>
  getWeekByIdOrDefault(state, weekId).daysByOrder;

export const getDayById = (state: AppState, dayId: string): Day =>
  getState(state).days[dayId];

export const getDayByIdOrDefault = (state: AppState, dayId: string): Day =>
  getDayById(state, dayId) || {};

export const getDayMoment = (state: AppState, dayId: string): Moment =>
  getDayByIdOrDefault(state, dayId).moment;

export const getDayOfMonth = (state: AppState, dayId: string): number =>
  getDayByIdOrDefault(state, dayId).dayOfMonth;

export const getDayMonthId = (state: AppState, dayId: string): string =>
  getDayByIdOrDefault(state, dayId).monthId;

export const getDayAppointmentIds = (state: AppState, dayId: string): {} =>
  getDayByIdOrDefault(state, dayId).appointmentsById || {};

export const getDayAppointmentIdsAsArray = (state: AppState, dayId: string): string[] =>
  Object.keys(getDayAppointmentIds(state, dayId));