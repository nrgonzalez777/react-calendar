import moment from 'moment';

export const getDayIdFromMoment = (datetime: moment.Moment): string => {
  return datetime.format('MM-DD-YYYY');
};

export const getWeekIdFromMoment = (datetime: moment.Moment, numWeek: number): string => {
  return `${numWeek}-${datetime.format('YYYY')}`;
};

export const getMonthIdFromMoment = (datetime: moment.Moment): string => {
  return datetime.format('MM-YYYY');
};