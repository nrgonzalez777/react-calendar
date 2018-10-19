import types from './types';

const addAppointment = () => ({
  type: types.ADD_APPOINTMENT,
  payload: {},
  error: false,
  metadata: {}
});

export default {
  addAppointment
};
