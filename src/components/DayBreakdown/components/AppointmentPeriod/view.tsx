import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

export type AppointmentPeriodViewInputProps = {
  appointmentId: string;
  title: string;
  topOffsetPercent: number;
  heightPercent: number;
};

export type AppointmentPeriodViewOutputProps = {
  onAppointmentSelected: (appointmentId: string) => void;
};

export type AppointmentPeriodViewProps = AppointmentPeriodViewInputProps &
  AppointmentPeriodViewOutputProps;

const AppointmentPeriodView = (props: AppointmentPeriodViewProps) => {
  return (
    <div
      className={css(styles.content)}
      style={{
        top: props.topOffsetPercent * (50 * 24),
        height: props.heightPercent * (50 * 24)
      }}
      onClick={() => props.onAppointmentSelected(props.appointmentId)}
    >
      {props.title}
    </div>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    left: '60px',
    right: '15px',
    backgroundColor: '#00add7',
    color: 'white',
    borderRadius: '5px',
    paddingTop: '5px',
    paddingLeft: '10px',
    cursor: 'pointer'
  }
});
export default AppointmentPeriodView;
