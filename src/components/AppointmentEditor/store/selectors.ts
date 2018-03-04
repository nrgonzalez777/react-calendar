import { AppState } from 'store/state';

export const getState = (state: AppState) => state.components.appointmentEditor;

export const isVisible = (state: AppState) => getState(state).isVisible;