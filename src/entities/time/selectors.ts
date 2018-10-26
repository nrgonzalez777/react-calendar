import { AppState } from 'store/state';
import selectorFactory from 'store/selectorFactory';

import { Day, Month, Time, Week } from './state';
import { Moment } from 'moment';

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
  getMonthById: selectorFactory(getMonthById, getState),
  getMonthByIdOrDefault: selectorFactory(getMonthByIdOrDefault, getState),
  getMonthWeeksByOrder: selectorFactory(getMonthWeeksByOrder, getState),
  getMonthNumber: selectorFactory(getMonthNumber, getState),
  getMonthMoment: selectorFactory(getMonthMoment, getState),
  getWeekById: selectorFactory(getWeekById, getState),
  getWeekByIdOrDefault: selectorFactory(getWeekByIdOrDefault, getState),
  getWeekDaysByOrder: selectorFactory(getWeekDaysByOrder, getState),
  getDayById: selectorFactory(getDayById, getState),
  getDayByIdOrDefault: selectorFactory(getDayByIdOrDefault, getState),
  getDayMoment: selectorFactory(getDayMoment, getState),
  getDayOfMonth: selectorFactory(getDayOfMonth, getState),
  getDayMonthId: selectorFactory(getDayMonthId, getState)
};
