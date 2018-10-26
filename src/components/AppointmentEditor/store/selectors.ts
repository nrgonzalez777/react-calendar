import { AppState } from 'store/state';
import selectorFactory, { complexSelectorFactory } from 'store/selectorFactory';
import { AppointmentEditorStrings } from 'strings/state';
import { appointmentSelectors } from 'entities/appointments';

import { AppointmentEditor, Validation } from './state';

const datetimeLocalFormat = 'YYYY-MM-DDTHH:mm';

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
  getStrings: () => AppointmentEditorStrings,
  getValidation: () => Validation
) => (): string => {
  const strings = getStrings();
  const validation = getValidation();

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
  getState: () => AppointmentEditor,
  getStrings: () => AppointmentEditorStrings,
  getAppointmentConflictTitle: (appointmentId: string) => string
) => () => {
  const state = getState();
  const strings = getStrings();
  const validation = getValidationState(state);

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
      getAppointmentConflictTitle(validation.appointmentConflictId)
    );
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
  getIsValid,
  getIsVisible,
  getStartErrorMessage,
  getEndErrorMessage,
  getPlaceholderTitle,
  getSaveLabel
};

const getAppointmentEditorState = (state: AppState) =>
  state.components.appointmentEditor;

const getAppointmentEditorStrings = (state: AppState) =>
  state.strings.appointmentEditor;

export default {
  getDeleteLabel: selectorFactory(getDeleteLabel, getAppointmentEditorStrings),
  getEditingAppointment: selectorFactory(
    getEditingAppointment,
    getAppointmentEditorState
  ),
  getEditingAppointmentTitle: selectorFactory(
    getEditingAppointmentTitle,
    getAppointmentEditorState
  ),
  getEditingAppointmentStart: selectorFactory(
    getEditingAppointmentStart,
    getAppointmentEditorState
  ),
  getEditingAppointmentStartAsString: selectorFactory(
    getEditingAppointmentStartAsString,
    getAppointmentEditorState
  ),
  getEditingAppointmentEnd: selectorFactory(
    getEditingAppointmentEnd,
    getAppointmentEditorState
  ),
  getEditingAppointmentEndAsString: selectorFactory(
    getEditingAppointmentEndAsString,
    getAppointmentEditorState
  ),
  getIsValid: selectorFactory(getIsValid, getAppointmentEditorState),
  getIsVisible: selectorFactory(getIsVisible, getAppointmentEditorState),
  getStartErrorMessage: complexSelectorFactory(
    getStartErrorMessage,
    getAppointmentEditorStrings
  ),
  getEndErrorMessage: complexSelectorFactory(
    getEndErrorMessage,
    getAppointmentEditorState,
    getAppointmentEditorStrings,
    appointmentSelectors.getAppointmentTitle
  ),
  getPlaceholderTitle: selectorFactory(
    getPlaceholderTitle,
    getAppointmentEditorStrings
  ),
  getSaveLabel: selectorFactory(getSaveLabel, getAppointmentEditorStrings)
};
