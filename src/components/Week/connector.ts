import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { WeekInputProps, WeekConnectProps, WeekProps } from './props';

import { getWeekDaysByOrder } from 'entities/time/selectors';

const mapStateToProps = (state: AppState, props: WeekProps): WeekConnectProps => ({
  dayIds: getWeekDaysByOrder(state, props.weekId),
});

export default connect<WeekConnectProps, {}, WeekInputProps>(mapStateToProps);