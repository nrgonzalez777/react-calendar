import { Appointments } from './appointments/state';
import { Time } from './time/state';

export type Entities = {
  appointments: Appointments;
  time: Time;
};
