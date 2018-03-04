import * as React from 'react';

import connector from './connector';
import { DayProps } from './props';
import * as styles from './styles.css';

const DayView = (props: DayProps) => (
    <div className={styles.day}>{props.dayNumber}</div>
);

export default connector(DayView);