import { connect, Dispatch } from 'react-redux';
import { AppState } from 'store/state';

import { appointmentSelectors } from 'entities/appointments';
import { dayBreakdownSelectors } from '../../store';

import {
  AppointmentPeriodViewInputProps,
  AppointmentPeriodViewOutputProps
} from './view';

export type AppointmentPeriodViewOwnProps = {
  appointmentId: string;
  onAppointmentSelected: () => void;
};

const mapStateToProps = (
  state: AppState,
  props: AppointmentPeriodViewOwnProps
): AppointmentPeriodViewInputProps => ({
  title: appointmentSelectors.getAppointmentTitle(state, props.appointmentId),
  topOffsetPercent: dayBreakdownSelectors.getTopOffsetPercent(
    state,
    props.appointmentId
  ),
  heightPercent: dayBreakdownSelectors.getHeightPercent(
    state,
    props.appointmentId
  )
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppState>,
  props: AppointmentPeriodViewOwnProps
): AppointmentPeriodViewOutputProps => ({
  onAppointmentSelected: props.onAppointmentSelected
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
