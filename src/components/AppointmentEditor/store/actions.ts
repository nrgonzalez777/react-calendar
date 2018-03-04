import * as types from './types';

export const closeEditor = () => ({
  type: types.APPOINTMENT_EDITOR_CLOSE,
  payload: {},
  error: false,
  metadata: {},
});