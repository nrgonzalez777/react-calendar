import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { applicationInit } from './store/actions';
import { AppProps } from './view';

const mapDispatchToProps = (dispatch: Dispatch<AppState>): AppProps => ({
  onAppInitialized: () => dispatch(applicationInit()),
});

export default connect(null, mapDispatchToProps);