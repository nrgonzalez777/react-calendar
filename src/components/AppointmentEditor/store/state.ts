import { Appointment } from 'entities/appointments/state';

export interface AppointmentEditor {
  appointment: Appointment;
  isValid: boolean;
  isVisible: boolean;
}