import { Moment } from 'moment';

export type Appointment = {
  appointmentId: string;
  title: string;
  start?: Moment;
  end?: Moment;
  daysById: { [key: string]: string };
};

export type AppointmentMap = {
  [key: string]: Appointment;
};

export type Appointments = {
  byId: AppointmentMap;
};
