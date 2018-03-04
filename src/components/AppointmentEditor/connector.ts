import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { AppointmentEditorConnectProps, AppointmentEditorDispatchProps } from './props';
import { closeEditor, updateTitle, saveAppointment } from './store/actions';
import { isVisible, getEditingAppointmentTitle, isValid, getStrings } from './store/selectors';

const mapStateToProps = (state: AppState): AppointmentEditorConnectProps => ({
  isDisabled: !isValid(state),
  isVisible: isVisible(state),
  appointmentTitle: getEditingAppointmentTitle(state),
  placeholderTitle: getStrings(state).placeholderTitle,
  saveLabel: getStrings(state).saveLabel,
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): AppointmentEditorDispatchProps => ({
  onCloseSelected: () => dispatch(closeEditor()),
  onUpdateTitle: (title: string) => dispatch(updateTitle(title)),
  onSaveAppointment: () => dispatch(saveAppointment()),
});

export default connect(mapStateToProps, mapDispatchToProps);