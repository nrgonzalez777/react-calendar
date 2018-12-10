import { Moment } from 'moment';

import { AppState } from 'store/state';
import createLocalSelector from 'store/createLocalSelector';
import { DayAbbrStrings } from 'strings/state';
import { appointmentsByDaySelectors } from 'entities/appointmentsByDay';
import { timeSelectors } from 'entities/time/';
import { Day } from 'entities/time/state';

import { Calendar } from './state';

// Local selectors
const getSelectedMonthId = (state: Calendar): string => state.selectedMonthId;

const getMonthTitle = (moment: Moment): string => {
  return moment ? moment.format('MMMM YYYY') : '';
};

const getCurrentDayId = (state: Calendar): string => state.currentDayId;

const getSelectedDayId = (state: Calendar): string => state.selectedDayId;

const getIsCurrentDay = (state: Calendar, dayId: string): boolean =>
  getCurrentDayId(state) === dayId;

const getIsSelectedDay = (state: Calendar, dayId: string): boolean =>
  getSelectedDayId(state) === dayId;

const getIsDayInCurrentMonth = (state: Calendar, dayMonthId: string): boolean =>
  dayMonthId === getSelectedMonthId(state);

const getDayAbbreviations = (abbrs: DayAbbrStrings): string[] => [
  abbrs.sunday,
  abbrs.monday,
  abbrs.tuesday,
  abbrs.wednesday,
  abbrs.thursday,
  abbrs.friday,
  abbrs.saturday
];

const getHasAppointmentIds = (dayAppointmentIds: string[]): boolean =>
  dayAppointmentIds && dayAppointmentIds.length > 0;

// Chained selectors

const getDayDisplayDate = timeSelectors.getDayOfMonth;

const getDayHasAppointment = (
  dayAppointmentsSelector: (state: AppState, dayId: string) => string[]
) => (state: AppState, dayId: string): boolean =>
  getHasAppointmentIds(dayAppointmentsSelector(state, dayId));

const getSelectedDay = (
  daySelector: (state: AppState, dayId: string) => Day,
  selectedDayIdSelector: (state: AppState) => string
) => (state: AppState): Day => daySelector(state, selectedDayIdSelector(state));

const getSelectedDayAppointmentIds = (
  dayAppointmentsSelector: (state: AppState, dayId: string) => string[],
  selectedDayIdSelector: (state: AppState) => string
) => (state: AppState): string[] =>
  dayAppointmentsSelector(state, selectedDayIdSelector(state));

const getSelectedMonthMoment = (
  monthMomentSelector: (state: AppState, monthId: string) => Moment,
  selectedMonthIdSelector: (state: AppState) => string
) => (state: AppState): Moment =>
  monthMomentSelector(state, selectedMonthIdSelector(state));

const getSelectedMonthTitle = (
  monthTitleSelector: (state: AppState, monthId: string) => Moment,
  selectedMonthIdSelector: (state: AppState) => string
) => (state: AppState): Moment =>
  monthTitleSelector(state, selectedMonthIdSelector(state));

// const getSelectedMonthTitle = (state: AppState): string =>
//  getMonthTitle(getSelectedMonthMoment(state));

const getSelectedMonthWeeks = (
  weekSelector: (state: AppState, monthId: string) => string[],
  selectedMonthIdSelector: (state: AppState) => string
) => (state: AppState): string[] =>
  weekSelector(state, selectedMonthIdSelector(state));

export const rawSelectors = {
  getCurrentDayId,
  getSelectedDayId,
  getIsCurrentDay,
  getIsSelectedDay,
  getIsDayInCurrentMonth,
  getDayAbbreviations
};

// Global selectors

const getState = (state: AppState): Calendar => state.components.calendar;

const getStrings = (state: AppState) => state.strings.dayAbbr;

const localizedSelectors = {
  getSelectedMonthId: createLocalSelector(getState, getSelectedMonthId),
  getCurrentDayId: createLocalSelector(getState, getCurrentDayId),
  getSelectedDayId: createLocalSelector(getState, getSelectedDayId),
  getIsCurrentDay: createLocalSelector(getState, getIsCurrentDay),
  getIsSelectedDay: createLocalSelector(getState, getIsSelectedDay),
  getIsDayInCurrentMonth: createLocalSelector(getState, getIsDayInCurrentMonth),
  getDayAbbreviations: createLocalSelector(getStrings, getDayAbbreviations)
};

// Final export

export default {
  ...localizedSelectors,
  getDayDisplayDate,
  getDayHasAppointment: getDayHasAppointment(
    appointmentsByDaySelectors.getDayAppointmentIds
  ),
  getSelectedDay: getSelectedDay(
    timeSelectors.getDayById,
    localizedSelectors.getSelectedDayId
  ),
  getSelectedDayAppointmentIds: getSelectedDayAppointmentIds(
    appointmentsByDaySelectors.getDayAppointmentIds,
    localizedSelectors.getSelectedDayId
  ),
  getSelectedMonthMoment: getSelectedMonthMoment(
    timeSelectors.getMonthMoment,
    localizedSelectors.getSelectedDayId
  )
  // getSelectedMonthTitle: getSelectedMonthTitle()
  // getSelectedMonthWeeks,
};
