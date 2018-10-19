import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';
import { AddAppointmentViewProps } from './view';
import { addAppointmentActions } from './store';

const mapPropsToDispatch = (
  dispatch: Dispatch<AppState>
): AddAppointmentViewProps => ({
  onAddAppointment: () => dispatch(addAppointmentActions.addAppointment())
});

export default connect(
  null,
  mapPropsToDispatch
);
