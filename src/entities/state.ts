import { Appointments } from './appointments/state';
import { Time } from './time/state';

export interface Entities {
  appointments: Appointments;
  time: Time;
}
