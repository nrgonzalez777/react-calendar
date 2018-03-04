export interface WeekInputProps {
  weekId: string;
}

export interface WeekConnectProps {
  dayIds: string[];
}

export interface WeekProps extends WeekInputProps, WeekConnectProps {}