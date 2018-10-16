import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { getAppointmentTitle } from 'entities/appointments/selectors';
import { getTopOffsetPercent, getHeightPercent } from './store/selectors';
import { appointmentSelected } from './store/actions';

import {
  AppointmentPeriodViewInputProps,
  AppointmentPeriodViewOutputProps,
} from './view';

export interface AppointmentPeriodViewOwnProps {
  appointmentId: string;
}

const mapStateToProps = (
  state: AppState,
  props: AppointmentPeriodViewOwnProps): AppointmentPeriodViewInputProps => ({
    appointmentId: props.appointmentId,
    title: getAppointmentTitle(state, props.appointmentId),
    topOffsetPercent: getTopOffsetPercent(state, props.appointmentId),
    heightPercent: getHeightPercent(state, props.appointmentId),
  });

const mapDispatchToProps = (dispatch: Dispatch<AppState>): AppointmentPeriodViewOutputProps => ({
  onAppointmentSelected: (appointmentId: string) => dispatch(appointmentSelected(appointmentId)),
});

export default connect(mapStateToProps, mapDispatchToProps);