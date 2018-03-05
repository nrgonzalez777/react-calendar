import { getDayOfMonth, getDayMonthId, getDayAppointmentIdsAsArray } from 'entities/time/selectors';
import { AppState } from 'store/state';
import {
  getCurrentDayId,
  getSelectedDayId,
  getSelectedMonthId,
} from '../../Calendar/store/selectors';

export const getDisplayDate = getDayOfMonth;

export const isCurrentDay = (state: AppState, dayId: string): boolean =>
  getCurrentDayId(state) === dayId;

export const isSelectedDay = (state: AppState, dayId: string): boolean =>
  getSelectedDayId(state) === dayId;

export const isDayInCurrentMonth = (state: AppState, dayId: string): boolean =>
  getDayMonthId(state, dayId) === getSelectedMonthId(state);

export const hasAppointment = (state: AppState, dayId: string): boolean =>
  getDayAppointmentIdsAsArray(state, dayId).length > 0;