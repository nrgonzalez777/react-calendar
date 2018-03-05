import * as React from 'react';
import classnames from 'classnames';

import connector from './connector';
import { DayProps } from './props';
import * as styles from './styles.css';

const DayView = (props: DayProps) => {
  const backgroundClasses = classnames({
    [styles.content]: true,
    [styles.dayOutOfMonth]: props.isDayOutOfSelectedMonth,
  });

  const dayClasses = classnames({
    [styles.day]: true,
    [styles.dayCurrent]: props.isCurrentDay,
    [styles.daySelected]: props.isSelectedDay,
  });

  return (
    <div className={backgroundClasses}>
        <div
          className={dayClasses}
          onClick={() => props.onDaySelected(props.dayId)}
        >
          {props.dayOfMonth}
        </div>
        {props.hasAppointment ? <div className={styles.hasAppointment} /> : null}
    </div>
  );
};

export default connector(DayView);