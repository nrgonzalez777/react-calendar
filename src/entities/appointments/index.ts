import { combineReducers, AnyAction, Reducer } from 'redux';
import { Appointments, AppointmentMap, Appointment } from './state';
import {
  APPOINTMENT_EDITOR_SAVE,
  APPOINTMENT_EDITOR_DELETE
} from 'components/AppointmentEditor/store/types';

const saveAppointment = (state: AppointmentMap, appointment: Appointment): AppointmentMap => {
  return { ...state, [appointment.appointmentId]: appointment };
};

const deleteAppointment = (state: AppointmentMap, appointmentId: string): AppointmentMap => {
  const { [appointmentId]: removed, ...newState } = state;
  return newState;
};

const byId = (state: AppointmentMap = {}, action: AnyAction): AppointmentMap => {
  switch (action.type) {
    case APPOINTMENT_EDITOR_SAVE:
      return saveAppointment(state, action.payload.newAppointment);
    case APPOINTMENT_EDITOR_DELETE:
      return deleteAppointment(state, action.payload.appointmentId);
    default:
      return state;
  }
};

const reducer: Reducer<Appointments> = combineReducers({
  byId
});

export default reducer;