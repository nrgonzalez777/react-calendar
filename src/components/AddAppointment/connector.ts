import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';
import { AddAppointmentProps } from './props';
import { addAppointment } from './store/actions';

const mapPropsToDispatch = (dispatch: Dispatch<AppState>): AddAppointmentProps => ({
  onAddAppointment: () => dispatch(addAppointment()),
});

export default connect(null, mapPropsToDispatch);