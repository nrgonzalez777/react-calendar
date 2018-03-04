import { AnyAction, Reducer } from 'redux';
import * as moment from 'moment';
import { Time, Month, Week, Day } from './state';
import { APP_INIT } from 'App/store/types';
import { getMonthIdFromMoment, getWeekIdFromMoment, getDayIdFromMoment } from 'helpers/timeHelpers';
import { CALENDAR_PREVIOUS_MONTH, CALENDAR_NEXT_MONTH } from 'components/Calendar/store/types';

const initState: Time = {
  months: {},
  weeks: {},
  days: {}
};

const createTimeEntitiesForMonth = (state: Time, datetime: moment.Moment): Time => {
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

  const startWeek = datetime.clone().startOf('month').week();
  const endWeek = datetime.clone().endOf('month').week();

  for (let weekIndex = startWeek; weekIndex <= endWeek; weekIndex += 1) {
    const weekId = getWeekIdFromMoment(datetime, weekIndex);
    newMonth.weeksByOrder.push(weekId);

    if (state.weeks[weekId] !== undefined) {
      continue;
    }

    const newWeek: Week = {
      weekId,
      daysByOrder: []
    };

    const startOfWeekDay = moment().week(weekIndex).startOf('week');
    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const weekDay = startOfWeekDay.clone().add(dayIndex, 'day');
      const dayId = getDayIdFromMoment(weekDay);
      newWeek.daysByOrder.push(dayId);

      if (state.days[dayId] !== undefined) {
        continue;
      }

      const newDay: Day = {
        dayId,
        appointmentsById: {},
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

const reducer: Reducer<Time> = (state: Time = initState, action: AnyAction): Time => {
  switch (action.type) {
    case APP_INIT:
    case CALENDAR_PREVIOUS_MONTH:
    case CALENDAR_NEXT_MONTH:
      return createTimeEntitiesForMonth(state, action.payload.month);
    default:
      return state;
  }

};

export default reducer;