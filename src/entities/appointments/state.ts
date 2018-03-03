export interface Appointment {
  appointmentId: string;
  daysById: { [key: string]: string};
}

export interface AppointmentMap {
  [key: string]: Appointment;
}

export interface Appointments {
  byId: AppointmentMap;
}