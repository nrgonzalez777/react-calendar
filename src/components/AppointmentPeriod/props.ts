export interface AppointmentPeriodInputProps {
  appointmentId: string;
}

export interface AppointmentPeriodConnectProps {
  title: string;
  topOffsetPercent: number;
  heightPercent: number;
}

export interface AppointmentPeriodOutputProps {
  onAppointmentSelected: (appointmentId: string) => void;
}

export interface AppointmentPeriodProps
  extends AppointmentPeriodInputProps,
  AppointmentPeriodConnectProps, AppointmentPeriodOutputProps {}