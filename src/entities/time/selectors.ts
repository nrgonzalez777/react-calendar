import { AppState } from 'store/state';
import { Day, Month, Time, Week } from './state';
import { Moment } from 'moment';

const getState = (state: AppState): Time => state.entities.time;

const getMonthById = (state: AppState, monthId: string): Month =>
  getState(state).months[monthId];

const getMonthByIdOrDefault = (state: AppState, monthId: string): Month =>
  getMonthById(state, monthId) || {};

const getMonthWeeksByOrder = (state: AppState, monthId: string): string[] =>
  getMonthByIdOrDefault(state, monthId).weeksByOrder;

const getMonthNumber = (state: AppState, monthId: string): number =>
  getMonthByIdOrDefault(state, monthId).monthNumber;

const getMonthMoment = (state: AppState, monthId: string): Moment =>
  getMonthByIdOrDefault(state, monthId).moment;

const getWeekById = (state: AppState, weekId: string): Week =>
  getState(state).weeks[weekId];

const getWeekByIdOrDefault = (state: AppState, weekId: string): Week =>
  getWeekById(state, weekId) || {};

const getWeekDaysByOrder = (state: AppState, weekId: string): string[] =>
  getWeekByIdOrDefault(state, weekId).daysByOrder;

const getDayById = (state: AppState, dayId: string): Day =>
  getState(state).days[dayId];

const getDayByIdOrDefault = (state: AppState, dayId: string): Day =>
  getDayById(state, dayId) || {};

const getDayMoment = (state: AppState, dayId: string): Moment =>
  getDayByIdOrDefault(state, dayId).moment;

const getDayOfMonth = (state: AppState, dayId: string): number =>
  getDayByIdOrDefault(state, dayId).dayOfMonth;

const getDayMonthId = (state: AppState, dayId: string): string =>
  getDayByIdOrDefault(state, dayId).monthId;

const getDayAppointmentIds = (state: AppState, dayId: string): {} =>
  getDayByIdOrDefault(state, dayId).appointmentsById || {};

const getDayAppointmentIdsAsArray = (
  state: AppState,
  dayId: string
): string[] => Object.keys(getDayAppointmentIds(state, dayId));

export default {
  getMonthById,
  getMonthByIdOrDefault,
  getMonthWeeksByOrder,
  getMonthNumber,
  getMonthMoment,
  getWeekById,
  getWeekByIdOrDefault,
  getWeekDaysByOrder,
  getDayById,
  getDayByIdOrDefault,
  getDayMoment,
  getDayOfMonth,
  getDayMonthId,
  getDayAppointmentIds,
  getDayAppointmentIdsAsArray
};
