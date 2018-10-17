import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import {
  getDayDisplayDate,
  getIsCurrentDay,
  getIsSelectedDay,
  getIsDayInCurrentMonth,
  getHasAppointment
} from '../../store/selectors';
import { changeSelectedDay } from '../../store/actions';

import { DayViewInputProps, DayViewOutputProps } from './view';

export type DayViewOwnProps = {
  dayId: string;
};

const mapStateToProps = (
  state: AppState,
  props: DayViewOwnProps
): DayViewInputProps => ({
  dayId: props.dayId,
  dayOfMonth: getDayDisplayDate(state, props.dayId),
  hasAppointment: getHasAppointment(state, props.dayId),
  isCurrentDay: getIsCurrentDay(state, props.dayId),
  isSelectedDay: getIsSelectedDay(state, props.dayId),
  isDayOutOfSelectedMonth: !getIsDayInCurrentMonth(state, props.dayId)
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
