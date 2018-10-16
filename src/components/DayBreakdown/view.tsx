import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import AppointmentPeriod from '../AppointmentPeriod';

export interface DayBreakdownViewProps {
  appointmentIds: string[];
  hours: Hour[];
}

export interface Hour {
  index: number;
  title: string;
}

const DayBreakdownView = (props: DayBreakdownViewProps) => {
  return (
    <div className={css(styles.content)}>
      {props.hours.map(h => <div key={h.index} className={css(styles.hour)}>{h.title}</div>)}
      {props.appointmentIds.map(id => <AppointmentPeriod appointmentId={id} key={id} />)}
    </div>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    width: '300px',
    height: '621px',
    marginLeft: '50px',
    overflowY: 'auto',
    backgroundColor: 'white',
    border: '1px solid rgba(39, 46, 57, 0.5)',
    borderTop: 1,
  },
  hour: {
    width: '100%',
    height: '50px',
    paddingLeft: '8px',
    borderTop: '1px solid rgba(39, 46, 57, 0.5)',
  },
});

export default DayBreakdownView;