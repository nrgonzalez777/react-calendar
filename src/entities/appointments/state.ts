import { Moment } from 'moment';

export interface Appointment {
  appointmentId: string;
  title: string;
  start?: Moment;
  end?: Moment;
  daysById: { [key: string]: string};
}

export interface AppointmentMap {
  [key: string]: Appointment;
}

export interface Appointments {
  byId: AppointmentMap;
}