import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { CalendarStateProps, CalendarOutputProps } from './props';
import { getCurrentMonthTitle, getCurrentMonthWeeks } from './store/selectors';
import { goToPreviousMonth, goToNextMonth } from './store/actions';

const mapStateToProps = (state: AppState): CalendarStateProps => ({
  monthName: getCurrentMonthTitle(state),
  weekIds: getCurrentMonthWeeks(state),
});

const mapPropsToDispatch = (dispatch: Dispatch<AppState>): CalendarOutputProps => ({
  onPreviousMonthSelected: () => dispatch(goToPreviousMonth()),
  onNextMonthSelected: () => dispatch(goToNextMonth()),
});

export default connect(mapStateToProps, mapPropsToDispatch);