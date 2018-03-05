export interface DayBreakdownConnectProps {
  appointmentIds: string[];
  hours: Hour[];
}

export interface Hour {
  index: number;
  title: string;
}