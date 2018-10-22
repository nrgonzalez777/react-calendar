import { AppState } from 'store/state';
import { AppointmentsByDay } from './state';

const getState = (state: AppState): AppointmentsByDay =>
  state.entities.appointmentsByDay;

const getDayAppointmentIds = (state: AppState, dayId: string) =>
  getState(state).byDayId[dayId] || [];

export default {
  getDayAppointmentIds
};
