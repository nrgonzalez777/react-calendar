import { combineReducers, AnyAction, Reducer } from 'redux';
import { Appointments, AppointmentMap } from './state';

const byId = (state: AppointmentMap = {}, action: AnyAction): AppointmentMap => {
  return state;
};

const reducer: Reducer<Appointments> = combineReducers({
  byId
});

export default reducer;