import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import actions from './store/actions';
import selectors from './store/selectors';
import { CalendarViewInputProps, CalendarViewOutputProps } from './view';

const mapStateToProps = (state: AppState): CalendarViewInputProps => ({
  monthName: selectors.getSelectedMonthTitle(state),
  weekIds: selectors.getSelectedMonthWeeks(state)
});

const mapPropsToDispatch = (
  dispatch: Dispatch<AppState>
): CalendarViewOutputProps => ({
  onPreviousMonthSelected: () => dispatch(actions.goToPreviousMonth()),
  onNextMonthSelected: () => dispatch(actions.goToNextMonth())
});

export default connect(
  mapStateToProps,
  mapPropsToDispatch
);
