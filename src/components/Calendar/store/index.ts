import { combineReducers, AnyAction, Reducer } from 'redux';

import { getMonthIdFromMoment } from 'helpers/timeHelpers';
import { APP_INIT } from 'App/store/types';
import { Calendar } from './state';

const currentMonthId = (state: string = '', action: AnyAction): string => {
  switch (action.type) {
    case APP_INIT:
      return getMonthIdFromMoment(action.payload.now);
    default:
      return state;
  }
};

const reducer: Reducer<Calendar> = combineReducers({
  currentMonthId
});

export default reducer;