import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { DayInputProps, DayStateProps, DayProps } from './props';
import { getDisplayDate } from './store/selectors';

const mapStateToProps = (state: AppState, props: DayProps): DayStateProps => ({
  dayOfMonth: getDisplayDate(state, props.dayId),
  hasAppointment: false,
  isCurrentDay: false,
});

// this means that we are typed with DayStateProps for the connect,
// but parent components will only see input props
export default connect<DayStateProps, {}, DayInputProps>(mapStateToProps);
