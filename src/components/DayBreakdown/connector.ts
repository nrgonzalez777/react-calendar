import moment from 'moment';
import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { Hour, DayBreakdownConnectProps } from './props';
import { getSelectedDayAppointments } from '../Calendar/store/selectors';

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

const mapStateToProps = (state: AppState): DayBreakdownConnectProps => ({
  appointmentIds: getSelectedDayAppointments(state),
  hours: createHours(),
});

// this means that we are typed with DayConnectProps for the connect,
// but parent components will only see input props
export default connect(mapStateToProps);
