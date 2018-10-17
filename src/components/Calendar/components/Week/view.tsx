import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Day from '../Day';

export type WeekViewProps = {
  dayIds: string[];
};

const WeekView = (props: WeekViewProps) => (
  <div className={css(styles.content)}>
    {props.dayIds
      ? props.dayIds.map(dayId => <Day key={dayId} dayId={dayId} />)
      : null}
  </div>
);

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flex: '1 0 100px',
    display: 'flex',
    alignItems: 'stretch'
  }
});

export default WeekView;
