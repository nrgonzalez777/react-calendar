import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { WeekInputProps, WeekStateProps, WeekProps } from './props';

import { getWeekDaysByOrder } from 'entities/time/selectors';

const mapStateToProps = (state: AppState, props: WeekProps): WeekStateProps => ({
  dayIds: getWeekDaysByOrder(state, props.weekId),
});

export default connect<WeekStateProps, {}, WeekInputProps>(mapStateToProps);