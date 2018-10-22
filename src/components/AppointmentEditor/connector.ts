import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import {
  AppointmentEditorViewInputProps,
  AppointmentEditorViewOutputProps
} from './view';
import actions from './store/actions';
import selectors from './store/selectors';

const mapStateToProps = (state: AppState): AppointmentEditorViewInputProps => ({
  isDisabled: !selectors.getIsValid(state),
  isVisible: selectors.getIsVisible(state),
  appointmentTitle: selectors.getEditingAppointmentTitle(state),
  appointmentStart: selectors.getEditingAppointmentStartAsString(state),
  appointmentStartError: selectors.getStartErrorMessage(state),
  appointmentEnd: selectors.getEditingAppointmentEndAsString(state),
  appointmentEndError: selectors.getEndErrorMessage(state),
  placeholderTitle: selectors.getPlaceholderTitle(state),
  saveLabel: selectors.getSaveLabel(state),
  deleteLabel: selectors.getDeleteLabel(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppState>
): AppointmentEditorViewOutputProps => ({
  onCloseSelected: () => dispatch(actions.closeEditor()),
  onUpdateTitle: (title: string) => dispatch(actions.updateTitle(title)),
  onUpdateStart: (start: string) => dispatch(actions.updateStart(start)),
  onUpdateEnd: (end: string) => dispatch(actions.updateEnd(end)),
  onSaveAppointment: () => dispatch(actions.saveAppointment()),
  onDeleteAppointment: () => dispatch(actions.deleteAppointment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
