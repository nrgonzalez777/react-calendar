export type AppointmentsForDay = {
  [key: string]: string[];
};

export type AppointmentsByDay = {
  byDayId: AppointmentsForDay;
};
