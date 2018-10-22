import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { WeekViewProps } from './view';

import { timeSelectors } from 'entities/time';

export type WeekViewOwnProps = {
  weekId: string;
};

const mapStateToProps = (
  state: AppState,
  props: WeekViewOwnProps
): WeekViewProps => ({
  dayIds: timeSelectors.getWeekDaysByOrder(state, props.weekId)
});

export default connect(mapStateToProps);
