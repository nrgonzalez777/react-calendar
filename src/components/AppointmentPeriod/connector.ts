import { connect } from 'react-redux';
import { AppState } from 'store/state';

import {
  AppointmentPeriodInputProps,
  AppointmentPeriodConnectProps,
  AppointmentPeriodProps
} from './props';
import { getAppointmentTitle } from 'entities/appointments/selectors';
import { getTopOffsetPercent, getHeightPercent } from './store/selectors';

const mapStateToProps = (
  state: AppState,
  props: AppointmentPeriodProps): AppointmentPeriodConnectProps => ({
    title: getAppointmentTitle(state, props.appointmentId),
    topOffsetPercent: getTopOffsetPercent(state, props.appointmentId),
    heightPercent: getHeightPercent(state, props.appointmentId),
  });

export default connect<AppointmentPeriodConnectProps, {}, AppointmentPeriodInputProps>
  (mapStateToProps);