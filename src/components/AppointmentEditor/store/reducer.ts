import { combineReducers, AnyAction, Reducer } from 'redux';
import moment from 'moment';
import uuid from 'uuid';

import { addAppointmentTypes } from 'components/AddAppointment/store';
import { dayBreakdownTypes } from 'components/DayBreakdown/store';

import types from './types';

import { Appointment } from 'entities/appointments/state';
import { AppointmentEditor, Validation } from './state';

import { getDayIdFromMoment } from 'helpers/timeHelpers';

const initAppointment: Appointment = {
  appointmentId: '',
  daysById: {},
  title: ''
};

const dayIdsFromTimePeriod = (
  start?: moment.Moment,
  end?: moment.Moment
): {} => {
  if (!start || !end) {
    return {};
  }

  // setting days to midnight so that calculating how many days there are works.
  const startDay = start.clone().startOf('day');
  const endDay = end.clone().startOf('day');

  const numDays = endDay.diff(startDay, 'day');

  const newState = {};

  for (let dayIndex = 0; dayIndex <= numDays; dayIndex += 1) {
    const day = startDay.clone().add(dayIndex, 'day');
    const dayId = getDayIdFromMoment(day);
    newState[dayId] = dayId;
  }

  return newState;
};

const appointment = (
  state: Appointment = initAppointment,
  action: AnyAction
): Appointment => {
  switch (action.type) {
    case addAppointmentTypes.ADD_APPOINTMENT:
      return { ...initAppointment, appointmentId: uuid() };
    case dayBreakdownTypes.DAY_BREAKDOWN_APPOINTMENT_SELECTED:
      return { ...action.payload.appointment };
    case types.APPOINTMENT_EDITOR_UPDATE_TITLE:
      return { ...state, title: action.payload.title };
    case types.APPOINTMENT_EDITOR_UPDATE_START:
      return {
        ...state,
        start: action.payload.start,
        daysById: dayIdsFromTimePeriod(action.payload.start, state.end)
      };
    case types.APPOINTMENT_EDITOR_UPDATE_END:
      return {
        ...state,
        end: action.payload.end,
        daysById: dayIdsFromTimePeriod(state.start, action.payload.end)
      };
    default:
      return state;
  }
};

const isVisible = (state: boolean = false, action: AnyAction): boolean => {
  switch (action.type) {
    case addAppointmentTypes.ADD_APPOINTMENT:
    case dayBreakdownTypes.DAY_BREAKDOWN_APPOINTMENT_SELECTED:
      return true;
    case types.APPOINTMENT_EDITOR_CLOSE:
    case types.APPOINTMENT_EDITOR_SAVE:
    case types.APPOINTMENT_EDITOR_DELETE:
      return false;
    default:
      return state;
  }
};

const initValidation: Validation = {
  appointmentConflictId: '',
  hasSetStart: false,
  hasSetEnd: false,
  isStartValid: false,
  isStartInTheFuture: false,
  isStartLessThanEnd: false,
  isEndValid: false,
  isEndInTheFuture: false,
  isTitleValid: false
};

const findAppointmentConflictId = (
  start: moment.Moment,
  end: moment.Moment,
  appointments: Appointment[]
): string => {
  if (!start || !end || !appointments) {
    return '';
  }
  // TODO: this is obviously inefficient, but it is an easy (if brute force) solution
  // to figure out whether there is a conflict. We shouldn't have enough appts for this
  // to matter right now.
  // return appointments ?  : null;
  const conflict = appointments.find(appt => {
    if (!appt.start || !appt.end) {
      return false;
    }
    return (
      (start.isAfter(appt.start) && start.isBefore(appt.end)) ||
      (end.isAfter(appt.start) && end.isBefore(appt.end)) ||
      (start.isBefore(appt.start) && end.isAfter(appt.end))
    );
  });

  return conflict ? conflict.appointmentId : '';
};

const validateStart = (state: Validation, action: AnyAction) => {
  const now: moment.Moment = action.payload.now;
  const start: moment.Moment = action.payload.start;
  const end: moment.Moment = action.payload.end;
  const currentAppointments: Appointment[] = action.payload.currentAppointments;

  return {
    ...state,
    appointmentConflictId: findAppointmentConflictId(
      start,
      end,
      currentAppointments
    ),
    hasSetStart: true,
    isStartValid: start.isValid(),
    isStartInTheFuture: start.isAfter(now),
    isStartLessThanEnd: end ? end.isAfter(start) : true
  };
};

const validateEnd = (state: Validation, action: AnyAction) => {
  const now: moment.Moment = action.payload.now;
  const start: moment.Moment = action.payload.start;
  const end: moment.Moment = action.payload.end;
  const currentAppointments: Appointment[] = action.payload.currentAppointments;

  return {
    ...state,
    appointmentConflictId: findAppointmentConflictId(
      start,
      end,
      currentAppointments
    ),
    hasSetEnd: true,
    isEndValid: end.isValid(),
    isEndInTheFuture: end.isAfter(now),
    isStartLessThanEnd: end ? end.isAfter(start) : true
  };
};

const validation = (
  state: Validation = initValidation,
  action: AnyAction
): Validation => {
  switch (action.type) {
    case addAppointmentTypes.ADD_APPOINTMENT:
      return { ...initValidation };
    case dayBreakdownTypes.DAY_BREAKDOWN_APPOINTMENT_SELECTED:
      let newState = {
        ...initValidation,
        isTitleValid: !!action.payload.appointment.title
      };
      newState = validateStart(newState, action);
      newState = validateEnd(newState, action);
      return newState;
    case types.APPOINTMENT_EDITOR_UPDATE_TITLE:
      return { ...state, isTitleValid: !!action.payload.title };
    case types.APPOINTMENT_EDITOR_UPDATE_START:
      return validateStart(state, action);
    case types.APPOINTMENT_EDITOR_UPDATE_END:
      return validateEnd(state, action);
    default:
      return state;
  }
};

const reducer: Reducer<AppointmentEditor> = combineReducers({
  appointment,
  isVisible,
  validation
});

export default reducer;
