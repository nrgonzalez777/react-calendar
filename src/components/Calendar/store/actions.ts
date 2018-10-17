import { Dispatch } from 'react-redux';
import * as types from './types';
import { getSelectedMonthMoment } from './selectors';
import { AppState } from 'store/state';
import { getAppointmentsArray } from 'entities/appointments/selectors';

export const changeSelectedDay = (dayId: string) => ({
  type: types.CALENDAR_DAY_SELECTED,
  payload: {
    dayId
  },
  error: false,
  metadata: {}
});

export const goToPreviousMonth = () => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const selectedMonth = getSelectedMonthMoment(state);
  const currentAppointments = getAppointmentsArray(state);

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

export const goToNextMonth = () => (
  dispatch: Dispatch<AppState>,
  getState: () => AppState
) => {
  const state = getState();
  const selectedMonth = getSelectedMonthMoment(state);
  const currentAppointments = getAppointmentsArray(state);

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
