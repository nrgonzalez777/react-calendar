import { combineReducers, AnyAction, Reducer } from 'redux';

import { getMonthIdFromMoment } from 'helpers/timeHelpers';
import { APP_INIT } from 'App/store/types';
import { Calendar } from './state';
import { CALENDAR_PREVIOUS_MONTH, CALENDAR_NEXT_MONTH } from './types';

const currentMonthId = (state: string = '', action: AnyAction): string => {
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
  currentMonthId
});

export default reducer;