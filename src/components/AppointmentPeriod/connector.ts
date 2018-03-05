import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import {
  AppointmentPeriodInputProps,
  AppointmentPeriodConnectProps,
  AppointmentPeriodOutputProps,
  AppointmentPeriodProps
} from './props';
import { getAppointmentTitle } from 'entities/appointments/selectors';
import { getTopOffsetPercent, getHeightPercent } from './store/selectors';
import { appointmentSelected } from './store/actions';

const mapStateToProps = (
  state: AppState,
  props: AppointmentPeriodProps): AppointmentPeriodConnectProps => ({
    title: getAppointmentTitle(state, props.appointmentId),
    topOffsetPercent: getTopOffsetPercent(state, props.appointmentId),
    heightPercent: getHeightPercent(state, props.appointmentId),
  });

const mapDispatchToProps = (dispatch: Dispatch<AppState>): AppointmentPeriodOutputProps => ({
  onAppointmentSelected: (appointmentId: string) => dispatch(appointmentSelected(appointmentId)),
});

export default connect<AppointmentPeriodConnectProps,
  AppointmentPeriodOutputProps, AppointmentPeriodInputProps>
  (mapStateToProps, mapDispatchToProps);