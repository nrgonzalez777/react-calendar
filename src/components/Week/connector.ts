import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { WeekViewProps } from './view';

import { getWeekDaysByOrder } from 'entities/time/selectors';

export interface WeekViewOwnProps {
  weekId: string;
}

const mapStateToProps = (state: AppState, props: WeekViewOwnProps): WeekViewProps => ({
  dayIds: getWeekDaysByOrder(state, props.weekId),
});

export default connect(mapStateToProps);