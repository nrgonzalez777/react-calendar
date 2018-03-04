import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { DayInputProps, DayStateProps, DayProps } from './props';

const mapStateToProps = (state: AppState, props: DayProps): DayStateProps => ({
  dayNumber: 1,
  hasAppointment: false,
  isCurrentDay: false,
});

// this means that we are typed with DayStateProps for the connect,
// but parent components will only see input props
export default connect<DayStateProps, {}, DayInputProps>(mapStateToProps);
