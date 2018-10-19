import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { appointmentSelectors } from 'entities/appointments';
import { dayBreakdownActions, dayBreakdownSelectors } from '../../store';

import {
  AppointmentPeriodViewInputProps,
  AppointmentPeriodViewOutputProps
} from './view';

export type AppointmentPeriodViewOwnProps = {
  appointmentId: string;
};

const mapStateToProps = (
  state: AppState,
  props: AppointmentPeriodViewOwnProps
): AppointmentPeriodViewInputProps => ({
  appointmentId: props.appointmentId,
  title: appointmentSelectors.getAppointmentTitle(state, props.appointmentId),
  topOffsetPercent: dayBreakdownSelectors.getTopOffsetPercent(state, props.appointmentId),
  heightPercent: dayBreakdownSelectors.getHeightPercent(state, props.appointmentId)
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppState>
): AppointmentPeriodViewOutputProps => ({
  onAppointmentSelected: (appointmentId: string) =>
    dispatch(dayBreakdownActions.appointmentSelected(appointmentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
