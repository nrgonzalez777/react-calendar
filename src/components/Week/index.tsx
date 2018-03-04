import * as React from 'react';

import connector from './connector';
import { WeekProps } from './props';
import * as styles from './styles.css';

import Day from '../Day';

const WeekView = (props: WeekProps) => (
    <div className={styles.content}>
      {props.dayIds ? props.dayIds.map(dayId => <Day key={dayId} dayId={dayId} />) : null}
    </div>
  );

export default connector(WeekView);