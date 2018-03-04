
import { Dispatch } from 'react-redux';
import * as types from './types';
import { getSelectedMonthMoment } from './selectors';
import { AppState } from 'store/state';

export const goToPreviousMonth = () => (
    dispatch: Dispatch<AppState>,
    getState: () => AppState
) => {
  const state = getState();
  const selectedMonth = getSelectedMonthMoment(state);

  dispatch({
    type: types.CALENDAR_PREVIOUS_MONTH,
    payload: {
      month: selectedMonth.clone().subtract(1, 'month')
    },
    error: false,
    metadata: {},
  });
};

export const goToNextMonth = () => (
    dispatch: Dispatch<AppState>,
    getState: () => AppState
) => {
  const state = getState();
  const selectedMonth = getSelectedMonthMoment(state);

  dispatch({
    type: types.CALENDAR_NEXT_MONTH,
    payload: {
      month: selectedMonth.clone().add(1, 'month')
    },
    error: false,
    metadata: {},
  });
};