import { Moment } from 'moment';

export type Month = {
  monthId: string;
  monthNumber: number;
  weeksByOrder: string[];
  moment: Moment;
};

export type MonthMap = {
  [key: string]: Month;
};

export type Week = {
  weekId: string;
  daysByOrder: string[];
};

export type WeekMap = {
  [key: string]: Week;
};

export type Day = {
  dayId: string;
  monthId: string;
  appointmentsById: { [key: string]: string };
  moment: Moment;
  dayOfMonth: number;
};

export type DayMap = {
  [key: string]: Day;
};

export type Time = {
  months: MonthMap;
  weeks: WeekMap;
  days: DayMap;
};
