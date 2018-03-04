
import * as types from './types';

export const changeSelectedDay = (dayId: string) => ({
  type: types.DAY_SELECTED,
  payload: {
    dayId,
  },
  error: false,
  metadata: {},
});