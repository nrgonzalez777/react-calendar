import { combineReducers, AnyAction, Reducer } from 'redux';

import { getMonthIdFromMoment, getDayIdFromMoment } from 'helpers/timeHelpers';
import { APP_INIT } from 'App/store/types';
import {
  CALENDAR_PREVIOUS_MONTH,
  CALENDAR_NEXT_MONTH,
  CALENDAR_DAY_SELECTED
} from './types';
import { Calendar } from './state';

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
    case CALENDAR_DAY_SELECTED:
      return action.payload.dayId;
    default:
      return state;
  }
};

const selectedMonthId = (state: string = '', action: AnyAction): string => {
  switch (action.type) {
    case APP_INIT:
    case CALENDAR_PREVIOUS_MONTH:
    case CALENDAR_NEXT_MONTH:
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
