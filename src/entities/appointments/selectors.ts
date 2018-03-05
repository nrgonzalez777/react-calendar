import { AppState } from 'store/state';
import { Appointments, Appointment } from './state';

export const getState = (state: AppState): Appointments => state.entities.appointments;

export const getAppointmentsArray = (state: AppState): Appointment[] => {
  const appointments = getState(state).byId;
  return Object.keys(appointments).map(k => appointments[k]);
};

export const getAppointmentById = (state: AppState, appointmentId: string): Appointment =>
  getState(state).byId[appointmentId];

export const getAppointmentByIdOrDefault = (state: AppState, appointmentId: string): Appointment =>
  getState(state).byId[appointmentId] || {};

export const getAppointmentTitle = (state: AppState, appointmentId: string): string =>
  getAppointmentByIdOrDefault(state, appointmentId).title;