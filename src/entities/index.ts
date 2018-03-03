import { combineReducers, Reducer } from 'redux';
import { Entities } from './state';
import appointments from './appointments';
import time from './time';

const reducer: Reducer<Entities> = combineReducers({
  appointments,
  time,
});

export default reducer;
