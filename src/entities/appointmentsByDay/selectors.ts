import { AppState } from 'store/state';

import selectorFactory from 'store/selectorFactory';

import { AppointmentsByDay } from './state';

const getDayAppointmentIds = (state: AppointmentsByDay, dayId: string) =>
  state.byDayId[dayId] || [];

export const rawSelectors = {
  getDayAppointmentIds
};

const getState = (state: AppState): AppointmentsByDay =>
  state.entities.appointmentsByDay;

export default {
  getDayAppointmentIds: selectorFactory(getDayAppointmentIds, getState)
};
