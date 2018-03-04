import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { AppointmentEditorConnectProps, AppointmentEditorDispatchProps } from './props';
import { closeEditor } from './store/actions';
import { isVisible } from './store/selectors';

const mapStateToProps = (state: AppState): AppointmentEditorConnectProps => ({
  isVisible: isVisible(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): AppointmentEditorDispatchProps => ({
  onCloseSelected: () => dispatch(closeEditor()),
});

export default connect(mapStateToProps, mapDispatchToProps);