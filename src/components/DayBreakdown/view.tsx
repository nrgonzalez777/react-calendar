import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import colors from 'constants/colors';

import AppointmentPeriod from './components/AppointmentPeriod';

export type DayBreakdownViewInputProps = {
  appointmentIds: string[];
  hours: Hour[];
};

export type DayBreakdownViewOutputProps = {
  onAppointmentSelected: (appointmentId: string) => void;
};

export type DayBreakdownViewProps = DayBreakdownViewInputProps &
  DayBreakdownViewOutputProps;

export type Hour = {
  index: number;
  title: string;
};

const DayBreakdownView = (props: DayBreakdownViewProps) => {
  return (
    <div className={css(styles.content)}>
      {props.hours.map(h => (
        <div key={h.index} className={css(styles.hour)}>
          {h.title}
        </div>
      ))}
      {props.appointmentIds.map(id => (
        <AppointmentPeriod
          appointmentId={id}
          key={id}
          onAppointmentSelected={() => props.onAppointmentSelected(id)}
        />
      ))}
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
    backgroundColor: colors.WHITE,
    border: `1px solid ${colors.BORDER_GRAY}`,
    borderTop: 1
  },
  hour: {
    width: '100%',
    height: '50px',
    paddingLeft: '8px',
    borderTop: `1px solid ${colors.BORDER_GRAY}`
  }
});

export default DayBreakdownView;
