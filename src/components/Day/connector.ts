import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { DayInputProps, DayConnectProps, DayDispatchProps, DayProps } from './props';
import {
  getDisplayDate,
  isCurrentDay,
  isSelectedDay,
  isDayInCurrentMonth
} from './store/selectors';
import { changeSelectedDay } from './store/actions';

const mapStateToProps = (state: AppState, props: DayProps): DayConnectProps => ({
  dayOfMonth: getDisplayDate(state, props.dayId),
  hasAppointment: false,
  isCurrentDay: isCurrentDay(state, props.dayId),
  isSelectedDay: isSelectedDay(state, props.dayId),
  isDayOutOfSelectedMonth:  !isDayInCurrentMonth(state, props.dayId)
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DayDispatchProps => ({
  onDaySelected: (dayId: string) => dispatch(changeSelectedDay(dayId)),
});

// this means that we are typed with DayConnectProps for the connect,
// but parent components will only see input props
export default connect<DayConnectProps, DayDispatchProps, DayInputProps>
(mapStateToProps, mapDispatchToProps);
