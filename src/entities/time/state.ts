export interface Month {
  monthId: string;
  weeksByOrder: string[];
}

export interface MonthMap {
  [key: string]: Month;
}

export interface Week {
  weekId: string;
  daysByOrder: string[];
}

export interface WeekMap {
  [key: string]: Week;
}

export interface Day {
  dayId: string;
  appointmentsById: { [key: string]: string};
}

export interface DayMap {
  [key: string]: Day;
}

export interface Time {
  months: MonthMap;
  weeks: WeekMap;
  days: DayMap;
}