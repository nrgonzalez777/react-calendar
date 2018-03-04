import { Dispatch } from 'react-redux';
import { AppState } from 'store/state';

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