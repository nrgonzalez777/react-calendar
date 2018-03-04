import * as React from 'react';

import connector from './connector';
import { CalendarProps } from './props';
import * as styles from './styles.css';

import DayAbbreviations from '../DayAbbreviations';
import Week from '../Week';

const CalendarView = (props: CalendarProps) => (
    <div className={styles.content}>
      <div className={styles.header}>{props.monthName}</div>
      <DayAbbreviations />
      <div className={styles.weekContainer}>
        {props.weekIds.map(id => <Week key={id} weekId={id}/>)}
      </div>
    </div>
  );

export default connector(CalendarView);