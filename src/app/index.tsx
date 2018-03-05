import * as React from 'react';

import connector from './connector';
import { AppProps } from './props';
import * as styles from './styles.css';
import Calendar from '../components/Calendar';
import AddAppointment from '../components/AddAppointment';
import AppointmentEditor from '../components/AppointmentEditor';
import DayBreakdown from 'components/DayBreakdown';

class AppView extends React.Component<AppProps> {

  componentDidMount() {
    this.props.onAppInitialized();
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.innerContainer}>
          <Calendar />
          <DayBreakdown />
        </div>
        <AddAppointment />
        <AppointmentEditor />
      </div>
    );
  }
}

export default connector(AppView);