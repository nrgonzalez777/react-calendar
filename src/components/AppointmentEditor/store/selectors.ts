import moment from 'moment';
import { AppState } from 'store/state';
import { getAppointmentTitle } from 'entities/appointments/selectors';

export const getState = (state: AppState) => state.components.appointmentEditor;

export const getStrings = (state: AppState) => state.strings.appointmentEditor;

export const isVisible = (state: AppState) => getState(state).isVisible;

export const getEditingAppointment = (state: AppState) => getState(state).appointment;

export const getEditingAppointmentTitle = (state: AppState) => getEditingAppointment(state).title;

const datetimeLocalFormat = 'YYYY-MM-DDTHH:mm';

export const getEditingAppointmentStartAsString = (state: AppState) => {
  const start = getEditingAppointment(state).start;
  return start && start.isValid() ? start.format(datetimeLocalFormat) : '';
};

export const getEditingAppointmentMinimumStartAsString = (state: AppState) =>
  moment().format(datetimeLocalFormat);

export const getEditingAppointmentMinimumEndAsString = getEditingAppointmentStartAsString;

export const getEditingAppointmentEndAsString = (state: AppState) => {
  const end = getEditingAppointment(state).end;
  return end && end.isValid() ? end.format(datetimeLocalFormat) : '';
};

export const isValid = (state: AppState) => {
  const validation = getState(state).validation;
  return validation.isTitleValid
    && validation.isStartValid
    && validation.isStartInTheFuture
    && validation.isStartLessThanEnd
    && validation.isEndValid
    && validation.isEndInTheFuture
    && !validation.appointmentConflictId;
};

export const getStartErrorMessage = (state: AppState) => {
  const strings = getStrings(state);
  const validation = getState(state).validation;

  if (!validation.hasSetStart) {
    return '';
  }

  if (!validation.isStartValid) {
    return strings.startInvalidError;
  }

  if (!validation.isStartInTheFuture) {
    return strings.startPastError;
  }

  if (!validation.isStartLessThanEnd) {
    return strings.startGreaterError;
  }

  return '';
};

export const getEndErrorMessage = (state: AppState) => {
  const strings = getStrings(state);
  const validation = getState(state).validation;

  if (!validation.hasSetEnd) {
    return '';
  }

  if (!validation.isEndValid) {
    return strings.endInvalidError;
  }

  if (!validation.isEndInTheFuture) {
    return strings.endPastError;
  }

  if (validation.appointmentConflictId) {
    // TODO: integrate format library
    return strings.conflictErrorFormat
    + getAppointmentTitle(state, validation.appointmentConflictId);
  }

  return '';
};