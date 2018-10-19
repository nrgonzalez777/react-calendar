import { AppState } from 'store/state';
import { Appointments, Appointment } from './state';

const getState = (state: AppState): Appointments => state.entities.appointments;

const getAppointmentsArray = (state: AppState): Appointment[] => {
  const appointments = getState(state).byId;
  return Object.keys(appointments).map(k => appointments[k]);
};

const getAppointmentById = (
  state: AppState,
  appointmentId: string
): Appointment => getState(state).byId[appointmentId];

const getAppointmentByIdOrDefault = (
  state: AppState,
  appointmentId: string
): Appointment => getState(state).byId[appointmentId] || {};

const getAppointmentTitle = (state: AppState, appointmentId: string): string =>
  getAppointmentByIdOrDefault(state, appointmentId).title;

export default {
  getAppointmentsArray,
  getAppointmentById,
  getAppointmentByIdOrDefault,
  getAppointmentTitle
};
