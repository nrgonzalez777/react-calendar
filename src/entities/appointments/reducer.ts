import { combineReducers, AnyAction, Reducer } from 'redux';
import { Moment } from 'moment';

import { appointmentEditorTypes } from 'components/AppointmentEditor/store';

import { Appointments, AppointmentMap, Appointment } from './state';

// State Shape

export type Appointment = {
  appointmentId: string;
  title: string;
  start?: Moment;
  end?: Moment;
  daysById: { [key: string]: string };
};

export type AppointmentMap = {
  [key: string]: Appointment;
};

export type Appointments = {
  byId: AppointmentMap;
};

// Reducers

const saveAppointment = (
  state: AppointmentMap,
  appointment: Appointment
): AppointmentMap => {
  return { ...state, [appointment.appointmentId]: appointment };
};

const deleteAppointment = (
  state: AppointmentMap,
  appointmentId: string
): AppointmentMap => {
  const { [appointmentId]: removed, ...newState } = state;
  return newState;
};

const byId = (
  state: AppointmentMap = {},
  action: AnyAction
): AppointmentMap => {
  switch (action.type) {
    case appointmentEditorTypes.APPOINTMENT_EDITOR_SAVE:
      return saveAppointment(state, action.payload.newAppointment);
    case appointmentEditorTypes.APPOINTMENT_EDITOR_DELETE:
      return deleteAppointment(state, action.payload.appointmentId);
    default:
      return state;
  }
};

const reducer: Reducer<Appointments> = combineReducers({
  byId
});

export default reducer;
