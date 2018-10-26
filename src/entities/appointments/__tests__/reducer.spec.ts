import moment from 'moment';
import { appointmentEditorTypes } from 'components/AppointmentEditor/store';

import reducer from '../reducer';

describe('entities/appointments reducer', () => {
  const appointment = {
    appointmentId: '123',
    title: 'Appointment Title',
    start: moment('2018-10-21T17:00:00.000Z'),
    end: moment('2018-10-21T18:00:00.000Z'),
    dayIds: []
  };
  const singleAppointmentState = {
    byId: {
      [appointment.appointmentId]: appointment
    }
  };

  test('has correct initial state', () => {
    // @ts-ignore: undefined
    expect(reducer(undefined, { type: 'REDUX/@@INIT' })).toEqual({ byId: {} });
  });

  test('saves new appointment when appointment editor entry is saved', () => {
    const action = {
      type: appointmentEditorTypes.APPOINTMENT_EDITOR_SAVE,
      payload: {
        newAppointment: appointment
      }
    };
    // @ts-ignore: undefined
    expect(reducer(undefined, action)).toEqual({
      byId: { [appointment.appointmentId]: appointment }
    });
  });

  test('overwrites old appointment when appointment editor entry is saved', () => {
    const newAppointment = { ...appointment, title: 'New Title' };
    const action = {
      type: appointmentEditorTypes.APPOINTMENT_EDITOR_SAVE,
      payload: {
        newAppointment
      }
    };

    expect(reducer(singleAppointmentState, action)).toEqual({
      byId: { [appointment.appointmentId]: newAppointment }
    });
  });

  test('deletes an appointment when appointment editor entry is deleted', () => {
    const action = {
      type: appointmentEditorTypes.APPOINTMENT_EDITOR_DELETE,
      payload: {
        appointmentId: appointment.appointmentId
      }
    };

    expect(reducer(singleAppointmentState, action)).toEqual({
      byId: {}
    });
  });
});
