import { Dispatch } from 'react-redux';
import { AppState } from 'store/state';
import moment from 'moment';

import * as types from './types';
import { getEditingAppointment } from './selectors';

export const closeEditor = () => ({
  type: types.APPOINTMENT_EDITOR_CLOSE,
  payload: {},
  error: false,
  metadata: {},
});

export const updateTitle = (title: string) => ({
  type: types.APPOINTMENT_EDITOR_UPDATE_TITLE,
  payload: { title },
  error: false,
  metadata: {},
});

export const updateStart = (start: string) => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState,
) => {
  const state = getState();
  const end = getEditingAppointment(state).end;

  dispatch({
    type: types.APPOINTMENT_EDITOR_UPDATE_START,
    payload: {
      end,
      now: moment(),
      start: moment(start),
    },
    error: false,
    metadata: {},
  });
};

export const updateEnd = (end: string) => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState,
) => {
  const state = getState();
  const start = getEditingAppointment(state).start;

  dispatch({
    type: types.APPOINTMENT_EDITOR_UPDATE_END,
    payload: {
      start,
      now: moment(),
      end: moment(end)
    },
    error: false,
    metadata: {},
  });
};

export const saveAppointment = () => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState,
) => {
  const state = getState();
  const newAppointment = getEditingAppointment(state);

  dispatch({
    type: types.APPOINTMENT_EDITOR_SAVE,
    payload: {
      newAppointment
    },
    error: false,
    metadata: {},
  });
};