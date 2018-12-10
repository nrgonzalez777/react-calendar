import { AppState } from './state';

export default function createLocalSelector<S, T, U extends {}[]>(
  stateSelector: (appState: AppState, ...args: {}[]) => S,
  selector: (selectorState: S, ...args: U) => T
) {
  return function(appState: AppState, ...restOfParams: U) {
    const state = stateSelector(appState);
    return selector(state, ...restOfParams);
  };
}
