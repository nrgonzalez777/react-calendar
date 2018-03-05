import moment from 'moment';

export const getDayIdFromMoment = (datetime: moment.Moment): string => {
  return datetime.format('MM-DD-YYYY');
};

export const getWeekIdFromMoment = (datetime: moment.Moment): string => {
  return datetime.format('WW-YYYY');
};

export const getMonthIdFromMoment = (datetime: moment.Moment): string => {
  return datetime.format('MM-YYYY');
};