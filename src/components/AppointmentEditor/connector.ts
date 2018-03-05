import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { AppointmentEditorConnectProps, AppointmentEditorDispatchProps } from './props';
import {
  closeEditor,
  updateTitle,
  saveAppointment,
  updateStart,
  updateEnd,
  deleteAppointment
} from './store/actions';
import {
  isVisible,
  getEditingAppointmentTitle,
  isValid,
  getStrings,
  getEditingAppointmentStartAsString,
  getEditingAppointmentEndAsString,
  getStartErrorMessage,
  getEndErrorMessage,
} from './store/selectors';

const mapStateToProps = (state: AppState): AppointmentEditorConnectProps => ({
  isDisabled: !isValid(state),
  isVisible: isVisible(state),
  appointmentTitle: getEditingAppointmentTitle(state),
  appointmentStart: getEditingAppointmentStartAsString(state),
  appointmentStartError: getStartErrorMessage(state),
  appointmentEnd: getEditingAppointmentEndAsString(state),
  appointmentEndError: getEndErrorMessage(state),
  placeholderTitle: getStrings(state).placeholderTitle,
  saveLabel: getStrings(state).saveLabel,
  deleteLabel: getStrings(state).deleteLabel,
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): AppointmentEditorDispatchProps => ({
  onCloseSelected: () => dispatch(closeEditor()),
  onUpdateTitle: (title: string) => dispatch(updateTitle(title)),
  onUpdateStart: (start: string) => dispatch(updateStart(start)),
  onUpdateEnd: (end: string) => dispatch(updateEnd(end)),
  onSaveAppointment: () => dispatch(saveAppointment()),
  onDeleteAppointment: () => dispatch(deleteAppointment()),
});

export default connect(mapStateToProps, mapDispatchToProps);