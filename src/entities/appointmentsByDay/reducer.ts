import { combineReducers, AnyAction, Reducer } from 'redux';

import { appointmentEditorTypes } from 'components/AppointmentEditor/store/';

import { Appointment } from '../appointments/state';
import { AppointmentsByDay, AppointmentsForDay } from './state';

const saveAppointment = (
  state: AppointmentsForDay,
  appointment: Appointment
) => {
  const newMap = { ...state };

  if (appointment.dayIds && appointment.dayIds.length > 0) {
    const { appointmentId } = appointment;

    appointment.dayIds.forEach(dayId => {
      const currentDay = newMap[dayId] || [];
      newMap[dayId] = currentDay.find(
        currentApptId => currentApptId === appointmentId
      )
        ? currentDay
        : [...currentDay, appointmentId];
    });
  }

  return newMap;
};

const deleteAppointment = (
  state: AppointmentsForDay,
  appointment: Appointment
) => {
  const newMap = { ...state };

  if (appointment.dayIds && appointment.dayIds.length > 0) {
    const { appointmentId } = appointment;

    appointment.dayIds.forEach(dayId => {
      const newDay = (newMap[dayId] || []).filter(
        currentApptId => currentApptId !== appointmentId
      );

      newMap[dayId] = newDay;
    });
  }

  return newMap;
};

const byDayId = (
  state: AppointmentsForDay = {},
  action: AnyAction
): AppointmentsForDay => {
  switch (action.type) {
    case appointmentEditorTypes.APPOINTMENT_EDITOR_SAVE:
      return saveAppointment(state, action.payload.newAppointment);
    case appointmentEditorTypes.APPOINTMENT_EDITOR_DELETE:
      return deleteAppointment(state, action.payload.appointmentId);
    default:
      return state;
  }
};

const reducer: Reducer<AppointmentsByDay> = combineReducers({
  byDayId
});

export default reducer;
