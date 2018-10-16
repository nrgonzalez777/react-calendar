import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { getSelectedMonthTitle, getSelectedMonthWeeks } from './store/selectors';
import { goToPreviousMonth, goToNextMonth } from './store/actions';
import { CalendarViewInputProps, CalendarViewOutputProps } from './view';

const mapStateToProps = (state: AppState): CalendarViewInputProps => ({
  monthName: getSelectedMonthTitle(state),
  weekIds: getSelectedMonthWeeks(state),
});

const mapPropsToDispatch = (dispatch: Dispatch<AppState>): CalendarViewOutputProps => ({
  onPreviousMonthSelected: () => dispatch(goToPreviousMonth()),
  onNextMonthSelected: () => dispatch(goToNextMonth()),
});

export default connect(mapStateToProps, mapPropsToDispatch);