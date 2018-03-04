import * as React from 'react';

import connector from './connector';
import { DayAbbreviationsProps } from './props';
import * as styles from './styles.css';

const DayAbbreviationsView = (props: DayAbbreviationsProps) => (
    <div className={styles.content}>
      {props.abbreviations.map(abbr => <div key={abbr} className={styles.abbr}>{abbr}</div>)}
    </div>
);

export default connector(DayAbbreviationsView);