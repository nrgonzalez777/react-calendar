import { combineReducers, AnyAction, Reducer } from 'redux';
import { Appointments, AppointmentMap, Appointment } from './state';
import { APPOINTMENT_EDITOR_SAVE } from 'components/AppointmentEditor/store/types';

const saveAppointment = (state: AppointmentMap, appointment: Appointment): AppointmentMap => {
  return { ...state, [appointment.appointmentId]: appointment };
};

const byId = (state: AppointmentMap = {}, action: AnyAction): AppointmentMap => {
  switch (action.type) {
    case APPOINTMENT_EDITOR_SAVE:
      return saveAppointment(state, action.payload.newAppointment);
    default:
      return state;
  }
};

const reducer: Reducer<Appointments> = combineReducers({
  byId
});

export default reducer;