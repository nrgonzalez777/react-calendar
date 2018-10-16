import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';
import { AddAppointmentViewProps } from './view';
import { addAppointment } from './store/actions';

const mapPropsToDispatch = (dispatch: Dispatch<AppState>): AddAppointmentViewProps => ({
  onAddAppointment: () => dispatch(addAppointment()),
});

export default connect(null, mapPropsToDispatch);