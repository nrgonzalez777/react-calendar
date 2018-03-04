import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { WeekInputProps, WeekStateProps, WeekProps } from './props';

import { getWeekById } from 'entities/time/selectors';

const mapStateToProps = (state: AppState, props: WeekProps): WeekStateProps => ({
  dayIds: getWeekById(state, props.weekId).daysByOrder,
});

export default connect<WeekStateProps, {}, WeekInputProps>(mapStateToProps);