export interface DayInputProps {
  dayId: string;
}

export interface DayStateProps {
  dayOfMonth: number;
  hasAppointment: boolean;
  isCurrentDay: boolean;
}

export interface DayProps extends DayInputProps, DayStateProps {}