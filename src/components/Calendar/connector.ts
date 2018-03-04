import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { CalendarProps } from './props';
import { getCurrentMonthWeeks } from './store/selectors';

const mapStateToProps = (state: AppState): CalendarProps => ({
  monthName: 'February',
  weekIds: getCurrentMonthWeeks(state),
});

export default connect(mapStateToProps, null);