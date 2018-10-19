import { Dispatch } from 'react-redux';

import { AppState } from 'store/state';
import { appointmentSelectors } from 'entities/appointments';

import selectors from './selectors';
import types from './types';

const changeSelectedDay = (dayId: string) => ({
  type: types.CALENDAR_DAY_SELECTED,
  payload: {
    dayId
  },
  error: false,
  metadata: {}
});

const goToPreviousMonth = () => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const selectedMonth = selectors.getSelectedMonthMoment(state);
  const currentAppointments = appointmentSelectors.getAppointmentsArray(state);

  dispatch({
    type: types.CALENDAR_PREVIOUS_MONTH,
    payload: {
      currentAppointments,
      month: selectedMonth.clone().subtract(1, 'month')
    },
    error: false,
    metadata: {}
  });
};

const goToNextMonth = () => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const selectedMonth = selectors.getSelectedMonthMoment(state);
  const currentAppointments = appointmentSelectors.getAppointmentsArray(state);

  dispatch({
    type: types.CALENDAR_NEXT_MONTH,
    payload: {
      currentAppointments,
      month: selectedMonth.clone().add(1, 'month')
    },
    error: false,
    metadata: {}
  });
};

export default {
  changeSelectedDay,
  goToPreviousMonth,
  goToNextMonth
};
