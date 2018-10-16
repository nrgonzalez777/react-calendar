import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import {
  getDisplayDate,
  isCurrentDay,
  isSelectedDay,
  isDayInCurrentMonth,
  hasAppointment
} from './store/selectors';
import { changeSelectedDay } from './store/actions';
import { DayViewInputProps, DayViewOutputProps } from './view';

export interface DayViewOwnProps {
  dayId: string;
}

const mapStateToProps = (
  state: AppState,
  props: DayViewOwnProps
): DayViewInputProps => ({
  dayId: props.dayId,
  dayOfMonth: getDisplayDate(state, props.dayId),
  hasAppointment: hasAppointment(state, props.dayId),
  isCurrentDay: isCurrentDay(state, props.dayId),
  isSelectedDay: isSelectedDay(state, props.dayId),
  isDayOutOfSelectedMonth: !isDayInCurrentMonth(state, props.dayId)
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppState>
): DayViewOutputProps => ({
  onDaySelected: (dayId: string) => dispatch(changeSelectedDay(dayId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
