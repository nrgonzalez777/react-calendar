import { combineReducers, AnyAction, Reducer } from 'redux';

import { getMonthIdFromMoment, getDayIdFromMoment } from 'helpers/timeHelpers';
import { APP_INIT } from 'App/store/types';

import { Calendar } from './state';
import types from './types';

const currentDayId = (state: string = '', action: AnyAction): string => {
  switch (action.type) {
    case APP_INIT:
      return getDayIdFromMoment(action.payload.month);
    default:
      return state;
  }
};

const selectedDayId = (state: string = '', action: AnyAction): string => {
  switch (action.type) {
    case types.CALENDAR_DAY_SELECTED:
      return action.payload.dayId;
    default:
      return state;
  }
};

const selectedMonthId = (state: string = '', action: AnyAction): string => {
  switch (action.type) {
    case APP_INIT:
    case types.CALENDAR_PREVIOUS_MONTH:
    case types.CALENDAR_NEXT_MONTH:
      return getMonthIdFromMoment(action.payload.month);
    default:
      return state;
  }
};

const reducer: Reducer<Calendar> = combineReducers({
  currentDayId,
  selectedDayId,
  selectedMonthId
});

export default reducer;
