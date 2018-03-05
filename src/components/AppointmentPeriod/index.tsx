import * as React from 'react';

import connector from './connector';
import { AppointmentPeriodProps } from './props';
import * as styles from './styles.css';

const DayBreakdownView = (props: AppointmentPeriodProps) => {
  return (
    <div
      className={styles.content}
      style={{ top: props.topOffsetPercent * (50 * 24), height: props.heightPercent * (50 * 24) }}
      onClick={() => props.onAppointmentSelected(props.appointmentId)}
    >
     {props.title}
    </div>
  );
};

export default connector(DayBreakdownView);