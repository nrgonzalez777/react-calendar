import moment from 'moment';

import { rawSelectors } from '../selectors';

describe('entities/appointments selectors', () => {
  const appt1 = {
    appointmentId: '1',
    title: 'Appointment Title',
    start: moment('2018-10-21T17:00:00.000Z'),
    end: moment('2018-10-21T18:00:00.000Z'),
    dayIds: []
  };
  const appt2 = {
    appointmentId: '2',
    title: 'Appointment Title',
    start: moment('2018-10-21T17:00:00.000Z'),
    end: moment('2018-10-21T18:00:00.000Z'),
    dayIds: []
  };
  const state = {
    byId: {
      [appt1.appointmentId]: appt1,
      [appt2.appointmentId]: appt2
    }
  };

  test('getAppointmentId returns correct appointment.', () => {
    expect(rawSelectors.getAppointmentById(state, '1')).toEqual(appt1);
  });
});
