import { AppState } from 'store/state';
import { Strings } from './state';

export const getStrings = (state: AppState): Strings => state.strings;