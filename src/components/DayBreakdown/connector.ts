import moment from 'moment';
import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { calendarSelectors } from 'components/Calendar/store';

import { dayBreakdownActions } from './store';
import { Hour, DayBreakdownViewInputProps } from './view';

// TODO: not proud of this, but it is getting late.
const createHours = (): Hour[] => {
  const hours: Hour[] = [];
  for (let i = 0; i < 24; i += 1) {
    hours.push({
      index: i,
      title: moment()
        .hour(i)
        .format('hA')
    });
  }

  return hours;
};

const mapStateToProps = (state: AppState): DayBreakdownViewInputProps => ({
  appointmentIds: calendarSelectors.getSelectedDayAppointmentIds(state),
  hours: createHours()
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => ({
  onAppointmentSelected: (appointmentId: string) =>
    dispatch(dayBreakdownActions.appointmentSelected(appointmentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
