import * as React from 'react';
import classnames from 'classnames';

import connector from './connector';
import { DayProps } from './props';
import * as styles from './styles.css';

const DayView = (props: DayProps) => {
  const dayClasses = classnames({
    [styles.day]: true,
    [styles.dayCurrent]: props.isCurrentDay,
    [styles.daySelected]: props.isSelectedDay,
  });

  return (
    <div className={styles.content}>
        <div
          className={dayClasses}
          onClick={() => props.onDaySelected(props.dayId)}
        >
          {props.dayOfMonth}
        </div>
    </div>
  );
};

export default connector(DayView);