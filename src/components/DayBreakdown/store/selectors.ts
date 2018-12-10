import { AppState } from 'store/state';
import { calendarSelectors } from 'components/Calendar/store';
import { appointmentSelectors } from 'entities/appointments';

const getTopOffsetPercent = (state: AppState, appointmentId: string) => {
  const appointment = appointmentSelectors.getAppointmentById(
    state,
    appointmentId
  );
  const selectedDay = calendarSelectors.getSelectedDay(state);

  if (!appointment.start) {
    return 0;
  }

  // for multi day appointments, make sure to use the selected day.
  const startOfDay = selectedDay.moment.clone().startOf('day');
  const minutesAtStart = appointment.start.clone().diff(startOfDay, 'minutes');

  // minutes per hour, if the day would start before midnight cap @midnight
  return minutesAtStart > 0 ? minutesAtStart / 1440 : 0;
};

const getHeightPercent = (state: AppState, appointmentId: string) => {
  const appointment = appointmentSelectors.getAppointmentById(
    state,
    appointmentId
  );
  const selectedDay = calendarSelectors.getSelectedDay(state);

  if (!appointment.start || !appointment.end) {
    return 0;
  }

  // start point could be start of day
  const start = appointment.start.isAfter(selectedDay.moment)
    ? appointment.start
    : selectedDay.moment;

  // end point should be end of day if over
  let end = selectedDay.moment.clone().add(1, 'day');
  end = appointment.end.isBefore(end) ? appointment.end : end;

  const minutesDiff = end.diff(start, 'minutes');

  // minutes per hour
  const heightPercent = minutesDiff / 1440;
  const topPercent = getTopOffsetPercent(state, appointmentId);

  if (heightPercent + topPercent > 1) {
    return Math.min(heightPercent - topPercent, 1);
  }

  return heightPercent;
};

export default {
  getTopOffsetPercent,
  getHeightPercent
};
