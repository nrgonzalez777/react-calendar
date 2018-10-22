import moment from 'moment';
import { AppState } from 'store/state';
import { appointmentSelectors } from 'entities/appointments';

const datetimeLocalFormat = 'YYYY-MM-DDTHH:mm';

const getState = (state: AppState) => state.components.appointmentEditor;

const getStrings = (state: AppState) => state.strings.appointmentEditor;

const getDeleteLabel = (state: AppState) => getStrings(state).deleteLabel;

const getEditingAppointment = (state: AppState) => getState(state).appointment;

const getEditingAppointmentTitle = (state: AppState) =>
  getEditingAppointment(state).title;

const getEditingAppointmentStartAsString = (state: AppState) => {
  const start = getEditingAppointment(state).start;
  return start && start.isValid() ? start.format(datetimeLocalFormat) : '';
};

const getEditingAppointmentMinimumStartAsString = (state: AppState) =>
  moment().format(datetimeLocalFormat);

const getEditingAppointmentMinimumEndAsString = getEditingAppointmentStartAsString;

const getEditingAppointmentEndAsString = (state: AppState) => {
  const end = getEditingAppointment(state).end;
  return end && end.isValid() ? end.format(datetimeLocalFormat) : '';
};

const getIsValid = (state: AppState) => {
  const validation = getState(state).validation;
  return (
    validation.isTitleValid &&
    validation.isStartValid &&
    validation.isStartInTheFuture &&
    validation.isStartLessThanEnd &&
    validation.isEndValid &&
    validation.isEndInTheFuture &&
    !validation.appointmentConflictId
  );
};

const getIsVisible = (state: AppState) => getState(state).isVisible;

const getStartErrorMessage = (state: AppState) => {
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

const getEndErrorMessage = (state: AppState) => {
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
    return (
      strings.conflictErrorFormat +
      appointmentSelectors.getAppointmentTitle(
        state,
        validation.appointmentConflictId
      )
    );
  }

  return '';
};

const getPlaceholderTitle = (state: AppState) =>
  getStrings(state).placeholderTitle;

const getSaveLabel = (state: AppState) => getStrings(state).saveLabel;

export default {
  getDeleteLabel,
  getEditingAppointment,
  getEditingAppointmentTitle,
  getEditingAppointmentStartAsString,
  getEditingAppointmentMinimumStartAsString,
  getEditingAppointmentMinimumEndAsString,
  getEditingAppointmentEndAsString,
  getIsValid,
  getIsVisible,
  getStartErrorMessage,
  getEndErrorMessage,
  getPlaceholderTitle,
  getSaveLabel
};
