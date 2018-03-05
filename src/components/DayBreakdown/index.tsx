import * as React from 'react';

import connector from './connector';
import { DayBreakdownConnectProps } from './props';
import * as styles from './styles.css';
import AppointmentPeriod from '../AppointmentPeriod';

const DayBreakdownView = (props: DayBreakdownConnectProps) => {
  return (
    <div className={styles.content}>
      {props.hours.map(h => <div key={h.index} className={styles.hour}>{h.title}</div>)}
      {props.appointmentIds.map(id => <AppointmentPeriod appointmentId={id} key={id} />)}
    </div>
  );
};

export default connector(DayBreakdownView);