export interface CalendarConnectProps {
  monthName: string;
  weekIds: string[];
}

export interface CalendarDispatchProps {
  onPreviousMonthSelected: () => void;
  onNextMonthSelected: () => void;
}

export interface CalendarProps extends CalendarConnectProps, CalendarDispatchProps {}