import { Dispatch } from 'react-redux';
import { AppState } from 'store/state';
import moment from 'moment';

import { appointmentSelectors } from 'entities/appointments';

import selectors from './selectors';
import types from './types';

const closeEditor = () => ({
  type: types.APPOINTMENT_EDITOR_CLOSE,
  payload: {}
});

const updateTitle = (title: string) => ({
  type: types.APPOINTMENT_EDITOR_UPDATE_TITLE,
  payload: { title }
});

const updateStart = (start: string) => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const end = selectors.getEditingAppointment(state).end;
  const currentAppointments = appointmentSelectors.getAppointmentsArray(state);

  dispatch({
    type: types.APPOINTMENT_EDITOR_UPDATE_START,
    payload: {
      currentAppointments,
      end,
      now: moment(),
      start: moment(start)
    }
  });
};

const updateEnd = (end: string) => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const start = selectors.getEditingAppointment(state).start;
  const currentAppointments = appointmentSelectors.getAppointmentsArray(state);

  dispatch({
    type: types.APPOINTMENT_EDITOR_UPDATE_END,
    payload: {
      currentAppointments,
      start,
      now: moment(),
      end: moment(end)
    }
  });
};

const saveAppointment = () => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const newAppointment = selectors.getEditingAppointment(state);

  dispatch({
    type: types.APPOINTMENT_EDITOR_SAVE,
    payload: {
      newAppointment
    }
  });
};

const deleteAppointment = () => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const appointment = selectors.getEditingAppointment(state);

  dispatch({
    type: types.APPOINTMENT_EDITOR_DELETE,
    payload: {
      appointmentId: appointment.appointmentId
    }
  });
};

export default {
  closeEditor,
  updateTitle,
  updateStart,
  updateEnd,
  saveAppointment,
  deleteAppointment
};
