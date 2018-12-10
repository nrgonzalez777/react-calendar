// import moment from 'moment';
import { createSelector } from 'reselect';

import { AppState } from 'store/state';
import createLocalSelector from 'store/createLocalSelector';
import { AppointmentEditorStrings } from 'strings/state';
import { appointmentSelectors } from 'entities/appointments';

import { AppointmentEditor, Validation } from './state';

const datetimeLocalFormat = 'YYYY-MM-DDTHH:mm';

// Local selectors

const getDeleteLabel = (strings: AppointmentEditorStrings) =>
  strings.deleteLabel;

const getEditingAppointment = (state: AppointmentEditor) => state.appointment;

const getEditingAppointmentTitle = (state: AppointmentEditor) =>
  getEditingAppointment(state).title;

const getEditingAppointmentStart = (state: AppointmentEditor) => {
  return getEditingAppointment(state).start;
};

const getEditingAppointmentStartAsString = (state: AppointmentEditor) => {
  const start = getEditingAppointmentStart(state);
  return start && start.isValid() ? start.format(datetimeLocalFormat) : '';
};

const getEditingAppointmentEnd = (state: AppointmentEditor) => {
  return getEditingAppointment(state).end;
};

const getEditingAppointmentEndAsString = (state: AppointmentEditor) => {
  const end = getEditingAppointmentEnd(state);
  return end && end.isValid() ? end.format(datetimeLocalFormat) : '';
};

const getValidationState = (state: AppointmentEditor) => state.validation;

const getIsValid = (state: AppointmentEditor) => {
  const validation = getValidationState(state);
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

const getIsVisible = (state: AppointmentEditor) => state.isVisible;

const getStartErrorMessage = (
  validation: Validation,
  strings: AppointmentEditorStrings
) => {
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

const getEndErrorMessage = (
  validation: Validation,
  strings: AppointmentEditorStrings,
  appointmentConflictTitle: string
) => {
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
    return strings.conflictErrorFormat + appointmentConflictTitle;
  }

  return '';
};

const getPlaceholderTitle = (strings: AppointmentEditorStrings) =>
  strings.placeholderTitle;

const getSaveLabel = (strings: AppointmentEditorStrings) => strings.saveLabel;

export const rawSelectors = {
  getDeleteLabel,
  getEditingAppointment,
  getEditingAppointmentTitle,
  getEditingAppointmentStart,
  getEditingAppointmentStartAsString,
  getEditingAppointmentEnd,
  getEditingAppointmentEndAsString,
  getValidationState,
  getIsValid,
  getIsVisible,
  getStartErrorMessage,
  getEndErrorMessage,
  getPlaceholderTitle,
  getSaveLabel
};

// Global selectors

const getState = (state: AppState) => state.components.appointmentEditor;

const getStrings = (state: AppState) => state.strings.appointmentEditor;

const getTitleOfConflictingAppointment = (state: AppState): string => {
  return appointmentSelectors.getAppointmentTitle(
    state,
    localizedSelectors.getValidationState(state).appointmentConflictId
  );
};

const localizedSelectors = {
  getDeleteLabel: createLocalSelector(getStrings, getDeleteLabel),
  getEditingAppointment: createLocalSelector(getState, getEditingAppointment),
  getEditingAppointmentTitle: createLocalSelector(
    getState,
    getEditingAppointmentTitle
  ),
  getEditingAppointmentStartAsString: createLocalSelector(
    getState,
    getEditingAppointmentStartAsString
  ),
  getEditingAppointmentEndAsString: createLocalSelector(
    getState,
    getEditingAppointmentEndAsString
  ),
  getValidationState: createLocalSelector(getState, getValidationState),
  getIsValid: createLocalSelector(getState, getIsValid),
  getIsVisible: createLocalSelector(getState, getIsVisible),
  getPlaceholderTitle: createLocalSelector(getStrings, getPlaceholderTitle),
  getSaveLabel: createLocalSelector(getStrings, getSaveLabel)
};

export default {
  ...localizedSelectors,
  getStartErrorMessage: createSelector(
    localizedSelectors.getValidationState,
    getStrings,
    getStartErrorMessage
  ),
  getEndErrorMessage: createSelector(
    localizedSelectors.getValidationState,
    getStrings,
    getTitleOfConflictingAppointment,
    getEndErrorMessage
  )
};
