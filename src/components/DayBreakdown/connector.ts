import moment from 'moment';
import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { getSelectedDayAppointments } from '../Calendar/store/selectors';
import { Hour, DayBreakdownViewProps } from './view';

// TODO: not proud of this, but it is getting late.
const createHours = (): Hour[] => {
  const hours: Hour[] = [];
  for (let i = 0; i < 24; i += 1) {
    hours.push({
      index: i,
      title: moment().hour(i).format('hA'),
    });
  }

  return hours;
};

const mapStateToProps = (state: AppState): DayBreakdownViewProps => ({
  appointmentIds: getSelectedDayAppointments(state),
  hours: createHours(),
});

export default connect(mapStateToProps);
