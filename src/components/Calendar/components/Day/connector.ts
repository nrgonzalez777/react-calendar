import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import actions from '../../store/actions';
import selectors from '../../store/selectors';
import { DayViewInputProps, DayViewOutputProps } from './view';

export type DayViewOwnProps = {
  dayId: string;
};

const mapStateToProps = (
  state: AppState,
  props: DayViewOwnProps
): DayViewInputProps => ({
  dayId: props.dayId,
  dayOfMonth: selectors.getDayDisplayDate(state, props.dayId),
  hasAppointment: selectors.getHasAppointment(state, props.dayId),
  isCurrentDay: selectors.getIsCurrentDay(state, props.dayId),
  isSelectedDay: selectors.getIsSelectedDay(state, props.dayId),
  isDayOutOfSelectedMonth: !selectors.getIsDayInCurrentMonth(state, props.dayId)
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppState>
): DayViewOutputProps => ({
  onDaySelected: (dayId: string) => dispatch(actions.changeSelectedDay(dayId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
