import { Appointment } from 'entities/appointments/state';

export type Validation = {
  appointmentConflictId: string;
  hasSetStart: boolean;
  hasSetEnd: boolean;
  isStartValid: boolean;
  isStartInTheFuture: boolean;
  isStartLessThanEnd: boolean;
  isEndValid: boolean;
  isEndInTheFuture: boolean;
  isTitleValid: boolean;
};

export type AppointmentEditor = {
  appointment: Appointment;
  isVisible: boolean;
  validation: Validation;
};
