export interface CalendarStateProps {
  monthName: string;
  weekIds: string[];
}

export interface CalendarOutputProps {
  onPreviousMonthSelected: () => void;
  onNextMonthSelected: () => void;
}

export interface CalendarProps extends CalendarStateProps, CalendarOutputProps {}