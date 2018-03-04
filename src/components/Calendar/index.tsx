import * as React from 'react';
import classnames from 'classnames';

import connector from './connector';
import { CalendarProps } from './props';
import * as styles from './styles.css';

import DayAbbreviations from '../DayAbbreviations';
import Week from '../Week';

const CalendarView = (props: CalendarProps) => (
    <div className={styles.content}>
      <div className={styles.header}>
        <div
          className={classnames(styles.chevron, styles.chevronLeft, styles.left)}
          onClick={props.onPreviousMonthSelected}
        />
        <div className={styles.headerText}>{props.monthName}</div>
        <div
          className={classnames(styles.chevron, styles.chevronRight, styles.right)}
          onClick={props.onNextMonthSelected}
        />
      </div>
      <DayAbbreviations />
      <div className={styles.weekContainer}>
        {props.weekIds ? props.weekIds.map(id => <Week key={id} weekId={id}/>) : null}
      </div>
    </div>
  );

export default connector(CalendarView);