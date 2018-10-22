import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import colors from 'constants/colors';

export type AppointmentPeriodViewInputProps = {
  title: string;
  topOffsetPercent: number;
  heightPercent: number;
};

export type AppointmentPeriodViewOutputProps = {
  onAppointmentSelected: () => void;
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
      onClick={props.onAppointmentSelected}
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
    backgroundColor: colors.PRIMARY,
    color: 'white',
    borderRadius: '5px',
    paddingTop: '5px',
    paddingLeft: '10px',
    cursor: 'pointer'
  }
});
export default AppointmentPeriodView;
