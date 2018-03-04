
import { Dispatch } from 'react-redux';
import * as types from './types';
import { getCurrentMonthMoment } from './selectors';
import { AppState } from 'store/state';

export const goToPreviousMonth = () => (
    dispatch: Dispatch<AppState>,
    getState: () => AppState
) => {
  const state = getState();
  const currentMonth = getCurrentMonthMoment(state);

  dispatch({
    type: types.CALENDAR_PREVIOUS_MONTH,
    payload: {
      month: currentMonth.clone().subtract(1, 'month')
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
  const currentMonth = getCurrentMonthMoment(state);

  dispatch({
    type: types.CALENDAR_PREVIOUS_MONTH,
    payload: {
      month: currentMonth.clone().add(1, 'month')
    },
    error: false,
    metadata: {},
  });
};