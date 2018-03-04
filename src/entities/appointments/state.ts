import { Moment } from 'moment';

export interface Appointment {
  appointmentId: string;
  daysById: { [key: string]: string};
  title: string;
  start?: Moment;
  end?: Moment;
}

export interface AppointmentMap {
  [key: string]: Appointment;
}

export interface Appointments {
  byId: AppointmentMap;
}