import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import colors from 'constants/colors';

import Calendar from '../components/Calendar';
import AddAppointment from '../components/AddAppointment';
import AppointmentEditor from '../components/AppointmentEditor';
import DayBreakdown from 'components/DayBreakdown';

export type AppProps = {
  onAppInitialized: () => void;
};

class AppView extends React.Component<AppProps> {
  componentDidMount() {
    this.props.onAppInitialized();
  }

  render() {
    return (
      <div className={css(styles.content)}>
        <div className={css(styles.innerContainer)}>
          <Calendar />
          <DayBreakdown />
        </div>
        <AddAppointment />
        <AppointmentEditor />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    backgroundColor: colors.BACKGROUND_GRAY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    display: 'flex'
  }
});

export default AppView;
