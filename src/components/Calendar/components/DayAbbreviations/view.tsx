import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

export type DayAbbreviationsViewProps = {
  abbreviations: string[];
};

const DayAbbreviationsView = (props: DayAbbreviationsViewProps) => (
  <div className={css(styles.content)}>
    {props.abbreviations.map(abbr => (
      <div key={abbr} className={css(styles.abbr)}>
        {abbr}
      </div>
    ))}
  </div>
);

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    height: '60px',
    flex: '0 0 auto'
  },
  abbr: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: '1 0 100px'
  }
});

export default DayAbbreviationsView;
