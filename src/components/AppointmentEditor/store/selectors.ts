import { AppState } from 'store/state';

export const getState = (state: AppState) => state.components.appointmentEditor;

export const getStrings = (state: AppState) => state.strings.appointmentEditor;

export const isValid = (state: AppState) => getState(state).isValid;

export const isVisible = (state: AppState) => getState(state).isVisible;

export const getEditingAppointment = (state: AppState) => getState(state).appointment;

export const getEditingAppointmentTitle = (state: AppState) => getEditingAppointment(state).title;