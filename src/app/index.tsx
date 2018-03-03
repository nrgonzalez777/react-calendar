import * as React from 'react';

import connector from './connector';
import { AppProps } from './props';

class App extends React.Component<AppProps> {

  componentDidMount() {
    this.props.onAppInitialized();
  }

  render() {
    return (
      <div>Calendar!</div>
    );
  }
}

export default connector(App);