export interface AppointmentPeriodInputProps {
  appointmentId: string;
}

export interface AppointmentPeriodConnectProps {
  title: string;
  topOffsetPercent: number;
  heightPercent: number;
}

export interface AppointmentPeriodProps
  extends AppointmentPeriodInputProps, AppointmentPeriodConnectProps {}