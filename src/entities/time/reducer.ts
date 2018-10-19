import { AnyAction, Reducer } from 'redux';
import * as moment from 'moment';

import { APP_INIT } from 'App/store/types';
import { calendarTypes } from 'components/Calendar/store';
import {
  getMonthIdFromMoment,
  getWeekIdFromMoment,
  getDayIdFromMoment
} from 'helpers/timeHelpers';

import { Time, Month, Week, Day } from './state';

const initState: Time = {
  months: {},
  weeks: {},
  days: {}
};

const createTimeEntitiesForMonth = (
  state: Time,
  datetime: moment.Moment
): Time => {
  // Unfortunately Moment is a mutable library, so we need to be careful
  // and clone moments for mutable operations.
  const monthId = getMonthIdFromMoment(datetime);

  // Don't recreate a month.
  if (state.months[monthId] !== undefined) {
    return state;
  }

  const newState = { ...state };

  const newMonth: Month = {
    monthId,
    moment: datetime.clone(),
    monthNumber: datetime.month(),
    weeksByOrder: []
  };

  const startWeek = datetime.clone().startOf('month');
  const endWeek = datetime.clone().endOf('month');
  const numWeeks = endWeek.diff(startWeek, 'week');

  for (let weekIndex = 0; weekIndex <= numWeeks; weekIndex += 1) {
    const week = startWeek
      .clone()
      .add(weekIndex, 'week')
      .startOf('week');
    const weekId = getWeekIdFromMoment(week);
    newMonth.weeksByOrder.push(weekId);

    if (state.weeks[weekId] !== undefined) {
      continue;
    }

    const newWeek: Week = {
      weekId,
      daysByOrder: []
    };

    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const weekDay = week.clone().add(dayIndex, 'day');
      const dayId = getDayIdFromMoment(weekDay);
      newWeek.daysByOrder.push(dayId);

      if (state.days[dayId] !== undefined) {
        continue;
      }

      const newDay: Day = {
        dayId,
        monthId: getMonthIdFromMoment(weekDay),
        moment: weekDay,
        dayOfMonth: weekDay.date()
      };

      newState.days[dayId] = newDay;
    }

    newState.weeks[weekId] = newWeek;
  }

  newState.months[monthId] = newMonth;

  return newState;
};

const reducer: Reducer<Time> = (
  state: Time = initState,
  action: AnyAction
): Time => {
  switch (action.type) {
    case APP_INIT:
    case calendarTypes.CALENDAR_PREVIOUS_MONTH:
    case calendarTypes.CALENDAR_NEXT_MONTH:
      return createTimeEntitiesForMonth(state, action.payload.month);
    default:
      return state;
  }
};

export default reducer;
