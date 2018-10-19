import { Dispatch } from 'react-redux';
import moment from 'moment';

import { AppState } from 'store/state';
import { appointmentSelectors } from 'entities/appointments';

import types from './types';

const appointmentSelected = (appointmentId: string) => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const appointment = appointmentSelectors.getAppointmentById(
    state,
    appointmentId
  );

  dispatch({
    type: types.DAY_BREAKDOWN_APPOINTMENT_SELECTED,
    payload: {
      appointment,
      start: appointment.start,
      end: appointment.end,
      now: moment()
    }
  });
};

export default {
  appointmentSelected
};
