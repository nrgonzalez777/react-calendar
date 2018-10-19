import { combineReducers, Reducer } from 'redux';
import { Entities } from './state';
import appointments from './appointments';
import appointmentsByDay from './appointmentsByDay';
import time from './time';

const reducer: Reducer<Entities> = combineReducers({
  appointments,
  appointmentsByDay,
  time
});

export default reducer;
