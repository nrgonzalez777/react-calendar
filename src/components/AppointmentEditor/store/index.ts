import { combineReducers, AnyAction, Reducer } from 'redux';
import uuid from 'uuid';
import { AppointmentEditor } from './state';
import { ADD_APPOINTMENT } from '../../AddAppointment/store/types';
import {
  APPOINTMENT_EDITOR_CLOSE,
  APPOINTMENT_EDITOR_UPDATE_TITLE,
  APPOINTMENT_EDITOR_SAVE
} from './types';
import { Appointment } from 'entities/appointments/state';

const initAppointment: Appointment = {
  appointmentId: '',
  daysById: {},
  title: '',
};

const appointment = (state: Appointment = initAppointment, action: AnyAction): Appointment => {
  switch (action.type) {
    case ADD_APPOINTMENT:
    case APPOINTMENT_EDITOR_SAVE:
      return { ...initAppointment, appointmentId: uuid() };
    case APPOINTMENT_EDITOR_UPDATE_TITLE:
      return { ...state, title: action.payload.title };
    default:
      return state;
  }
};

const isValid = (state: boolean = false, action: AnyAction): boolean => {
  switch (action.type) {
    case APPOINTMENT_EDITOR_UPDATE_TITLE:
      return !!action.payload.title;
    case ADD_APPOINTMENT:
    case APPOINTMENT_EDITOR_CLOSE:
      return false;
    default:
      return state;
  }
};

const isVisible = (state: boolean = false, action: AnyAction): boolean => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return true;
    case APPOINTMENT_EDITOR_CLOSE:
    case APPOINTMENT_EDITOR_SAVE:
      return false;
    default:
      return state;
  }
};

const reducer: Reducer<AppointmentEditor> = combineReducers({
  appointment,
  isValid,
  isVisible,
});

export default reducer;