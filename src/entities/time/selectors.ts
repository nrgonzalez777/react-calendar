import { Moment } from 'moment';

import { AppState } from 'store/state';
import createLocalSelector from 'store/createLocalSelector';

import { Day, Month, Time, Week } from './state';

const getMonthById = (state: Time, monthId: string): Month =>
  state.months[monthId];

const getMonthByIdOrDefault = (state: Time, monthId: string): Month =>
  getMonthById(state, monthId) || {};

const getMonthWeeksByOrder = (state: Time, monthId: string): string[] =>
  getMonthByIdOrDefault(state, monthId).weeksByOrder;

const getMonthNumber = (state: Time, monthId: string): number =>
  getMonthByIdOrDefault(state, monthId).monthNumber;

const getMonthMoment = (state: Time, monthId: string): Moment =>
  getMonthByIdOrDefault(state, monthId).moment;

const getWeekById = (state: Time, weekId: string): Week => state.weeks[weekId];

const getWeekByIdOrDefault = (state: Time, weekId: string): Week =>
  getWeekById(state, weekId) || {};

const getWeekDaysByOrder = (state: Time, weekId: string): string[] =>
  getWeekByIdOrDefault(state, weekId).daysByOrder;

const getDayById = (state: Time, dayId: string): Day => state.days[dayId];

const getDayByIdOrDefault = (state: Time, dayId: string): Day =>
  getDayById(state, dayId) || {};

const getDayMoment = (state: Time, dayId: string): Moment =>
  getDayByIdOrDefault(state, dayId).moment;

const getDayOfMonth = (state: Time, dayId: string): number =>
  getDayByIdOrDefault(state, dayId).dayOfMonth;

const getDayMonthId = (state: Time, dayId: string): string =>
  getDayByIdOrDefault(state, dayId).monthId;

export const rawSelectors = {
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
  getDayMonthId
};

const getState = (state: AppState): Time => state.entities.time;

export default {
  getMonthById: createLocalSelector(getState, getMonthById),
  getMonthByIdOrDefault: createLocalSelector(getState, getMonthByIdOrDefault),
  getMonthWeeksByOrder: createLocalSelector(getState, getMonthWeeksByOrder),
  getMonthNumber: createLocalSelector(getState, getMonthNumber),
  getMonthMoment: createLocalSelector(getState, getMonthMoment),
  getWeekById: createLocalSelector(getState, getWeekById),
  getWeekByIdOrDefault: createLocalSelector(getState, getWeekByIdOrDefault),
  getWeekDaysByOrder: createLocalSelector(getState, getWeekDaysByOrder),
  getDayById: createLocalSelector(getState, getDayById),
  getDayByIdOrDefault: createLocalSelector(getState, getDayByIdOrDefault),
  getDayMoment: createLocalSelector(getState, getDayMoment),
  getDayOfMonth: createLocalSelector(getState, getDayOfMonth),
  getDayMonthId: createLocalSelector(getState, getDayMonthId)
};
