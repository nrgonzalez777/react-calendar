import * as React from 'react';

import connector from './connector';
import { WeekProps } from './props';
import * as styles from './styles.css';

const WeekView = (props: WeekProps) => (
    <div className={styles.content}>Week</div>
  );

export default connector(WeekView);