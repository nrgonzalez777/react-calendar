export interface DayInputProps {
  dayId: string;
}

export interface DayConnectProps {
  dayOfMonth: number;
  hasAppointment: boolean;
  isCurrentDay: boolean;
  isSelectedDay: boolean;
  isDayOutOfSelectedMonth: boolean;
}

export interface DayDispatchProps {
  onDaySelected: (dayId: string) => void;
}

export interface DayProps extends DayInputProps, DayConnectProps, DayDispatchProps {}