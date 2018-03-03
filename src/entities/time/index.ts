import { AnyAction, Reducer } from 'redux';
import { Time } from './state';
import { APP_INIT } from 'app/types';

const initState: Time = {
  months: {},
  weeks: {},
  days: {}
};

const reducer: Reducer<Time> = (state: Time = initState, action: AnyAction): Time => {
  switch (action.type) {
    case APP_INIT:
      return state;
    default:
      return state;
  }

};

export default reducer;