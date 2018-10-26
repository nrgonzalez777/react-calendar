import { AppState } from 'store/state';
import selectorFactory from 'store/selectorFactory';

import { Appointments, Appointment } from './state';

const getAppointmentsArray = (state: Appointments): Appointment[] => {
  const appointments = state.byId;
  return Object.keys(appointments).map(k => appointments[k]);
};

const getAppointmentById = (
  state: Appointments,
  appointmentId: string
): Appointment => state.byId[appointmentId];

const getAppointmentByIdOrDefault = (
  state: Appointments,
  appointmentId: string
): Appointment => state.byId[appointmentId] || {};

const getAppointmentTitle = (
  state: Appointments,
  appointmentId: string
): string => getAppointmentByIdOrDefault(state, appointmentId).title;

export const rawSelectors = {
  getAppointmentsArray,
  getAppointmentById,
  getAppointmentByIdOrDefault,
  getAppointmentTitle
};

const getState = (state: AppState): Appointments => state.entities.appointments;

export default {
  getAppointmentsArray: selectorFactory(getAppointmentsArray, getState),
  getAppointmentById: selectorFactory(getAppointmentById, getState),
  getAppointmentByIdOrDefault: selectorFactory(
    getAppointmentByIdOrDefault,
    getState
  ),
  getAppointmentTitle: selectorFactory(getAppointmentTitle, getState)
};
