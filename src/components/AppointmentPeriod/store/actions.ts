import { Dispatch } from 'react-redux';
import moment from 'moment';
import { AppState } from 'store/state';

import * as types from './types';
import { getAppointmentById } from 'entities/appointments/selectors';

export const appointmentSelected = (appointmentId: string) => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState,
) => {
  const state = getState();
  const appointment = getAppointmentById(state, appointmentId);

  dispatch({
    type: types.APPOINTMENT_PERIOD_SELECTED,
    payload: {
      appointment,
      start: appointment.start,
      end: appointment.end,
      now: moment(),
    },
    error: false,
    metadata: {},
  });
};