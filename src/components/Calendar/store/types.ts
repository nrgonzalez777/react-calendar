const prefix = (text: string) => `CALENDAR.${text}`;

const CALENDAR_DAY_SELECTED = prefix('DAY_SELECTED');
const CALENDAR_PREVIOUS_MONTH = prefix('PREVIOUS_MONTH');
const CALENDAR_NEXT_MONTH = prefix('NEXT_MONTH');

export default {
  CALENDAR_DAY_SELECTED,
  CALENDAR_PREVIOUS_MONTH,
  CALENDAR_NEXT_MONTH
};
