import { AppState } from 'store/state';
import { getStrings } from 'strings/selectors';

export const getDayAbbreviations = (state: AppState): string[] => {
  const abbrs = getStrings(state).dayAbbr;
  return [
    abbrs.sunday,
    abbrs.monday,
    abbrs.tuesday,
    abbrs.wednesday,
    abbrs.thursday,
    abbrs.friday,
    abbrs.saturday
  ];
};