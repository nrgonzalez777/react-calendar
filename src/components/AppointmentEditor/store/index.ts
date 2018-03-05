import { combineReducers, AnyAction, Reducer } from 'redux';
import moment from 'moment';
import uuid from 'uuid';
import { AppointmentEditor, Validation } from './state';
import { ADD_APPOINTMENT } from '../../AddAppointment/store/types';
import {
  APPOINTMENT_EDITOR_CLOSE,
  APPOINTMENT_EDITOR_UPDATE_TITLE,
  APPOINTMENT_EDITOR_SAVE,
  APPOINTMENT_EDITOR_UPDATE_START,
  APPOINTMENT_EDITOR_UPDATE_END
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
    case APPOINTMENT_EDITOR_UPDATE_START:
      return { ...state, start: action.payload.start };
    case APPOINTMENT_EDITOR_UPDATE_END:
      return { ...state, end: action.payload.end };
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

const initValidation: Validation = {
  doesAppointmentConflict: false,
  hasSetStart: false,
  hasSetEnd: false,
  isStartValid: false,
  isStartInTheFuture: false,
  isStartLessThanEnd: false,
  isEndValid: false,
  isEndInTheFuture: false,
  isTitleValid: false,
};

const validateStart = (state: Validation, action: AnyAction) => {
  const now: moment.Moment = action.payload.now;
  const start: moment.Moment = action.payload.start;
  const end: moment.Moment = action.payload.end;

  return {
    ...state,
    hasSetStart: true,
    isStartValid: start.isValid(),
    isStartInTheFuture: start.isAfter(now),
    isStartLessThanEnd: end ? end.isAfter(start) : true,
  };
};

const validateEnd = (state: Validation, action: AnyAction) => {
  const now: moment.Moment = action.payload.now;
  const start: moment.Moment = action.payload.start;
  const end: moment.Moment = action.payload.end;

  return {
    ...state,
    hasSetEnd: true,
    isEndValid: end.isValid(),
    isEndInTheFuture: end.isAfter(now),
    isStartLessThanEnd: end ? end.isAfter(start) : true,
  };
};

const validation = (state: Validation = initValidation, action: AnyAction): Validation => {

  switch (action.type) {
    case ADD_APPOINTMENT:
      return { ...initValidation };
    case APPOINTMENT_EDITOR_UPDATE_TITLE:
      return { ...state, isTitleValid: !!action.payload.title };
    case APPOINTMENT_EDITOR_UPDATE_START:
      return validateStart(state, action);
    case APPOINTMENT_EDITOR_UPDATE_END:
      return validateEnd(state, action);
    default:
      return state;
  }
};

const reducer: Reducer<AppointmentEditor> = combineReducers({
  appointment,
  isVisible,
  validation,
});

export default reducer;