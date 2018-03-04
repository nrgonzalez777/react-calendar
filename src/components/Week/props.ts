export interface WeekInputProps {
  weekId: string;
}

export interface WeekStateProps {
  dayIds: string[];
}

export interface WeekProps extends WeekInputProps, WeekStateProps {}