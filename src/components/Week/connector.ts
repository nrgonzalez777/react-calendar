import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { WeekProps } from './props';

import { getWeekById } from 'entities/time/selectors';

const mapStateToProps = (state: AppState, props: WeekProps): WeekProps => ({
  dayIds: getWeekById(state, props.weekId).daysByOrder,
  weekId: props.weekId,
});

export default connect(mapStateToProps, null);