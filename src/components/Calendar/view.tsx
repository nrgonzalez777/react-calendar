import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Chevron from '../common/Chevron';
import DayAbbreviations from './components/DayAbbreviations';
import Week from './components/Week';

export type CalendarViewInputProps = {
  monthName: string;
  weekIds: string[];
};

export type CalendarViewOutputProps = {
  onPreviousMonthSelected: () => void;
  onNextMonthSelected: () => void;
};

export type CalendarViewProps = CalendarViewInputProps &
  CalendarViewOutputProps;

const CalendarView = (props: CalendarViewProps) => (
  <div className={css(styles.content)}>
    <div className={css(styles.header)}>
      <Chevron
        color="white"
        direction="left"
        onClick={props.onPreviousMonthSelected}
      />
      <div className={css(styles.headerText)}>{props.monthName}</div>
      <Chevron
        color="white"
        direction="right"
        onClick={props.onNextMonthSelected}
      />
    </div>
    <DayAbbreviations />
    <div className={css(styles.weekContainer)}>
      {props.weekIds
        ? props.weekIds.map(id => <Week key={id} weekId={id} />)
        : null}
    </div>
  </div>
);

const styles = StyleSheet.create({
  content: {
    width: '700px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#00add7',
    color: 'white'
  },
  header: {
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 auto',
    fontSize: '24px'
  },
  headerText: {
    display: 'flex',
    justifyContent: 'center',
    width: '190px'
  },
  weekContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: '1 0 auto',
    backgroundColor: 'white',
    borderLeft: '1px solid rgba(39, 46, 57, 0.5)',
    borderRight: '1px solid rgba(39, 46, 57, 0.5)',
    borderBottom: '1px solid rgba(39, 46, 57, 0.5)'
  }
});

export default CalendarView;
