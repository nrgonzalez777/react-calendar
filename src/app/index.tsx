import * as React from 'react';

import connector from './connector';
import { AppProps } from './props';
import * as styles from './styles.css';
import Calendar from '../components/Calendar';

class AppView extends React.Component<AppProps> {

  componentDidMount() {
    this.props.onAppInitialized();
  }

  render() {
    return (
      <div className={styles.content}>
        <Calendar />
      </div>
    );
  }
}

export default connector(AppView);