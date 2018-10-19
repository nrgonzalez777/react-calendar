import { Appointments } from './appointments/state';
import { AppointmentsByDay } from './appointmentsByDay/state';
import { Time } from './time/state';

export type Entities = {
  appointments: Appointments;
  appointmentsByDay: AppointmentsByDay;
  time: Time;
};
