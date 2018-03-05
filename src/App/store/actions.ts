import * as moment from 'moment';

import * as types from './types';

export const applicationInit = () => ({
  type: types.APP_INIT,
  payload: {
    currentAppointments: [],
    month: moment(),
  },
  error: false,
  metadata: {},
});