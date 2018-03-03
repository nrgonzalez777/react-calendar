import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { applicationInit } from './actions';
import { AppProps } from './props';

const mapDispatchToProps = (dispatch: Dispatch<AppState>): AppProps => ({
  onAppInitialized: () => dispatch(applicationInit()),
});

export default connect(null, mapDispatchToProps);