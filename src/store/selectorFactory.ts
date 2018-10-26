import { AppState } from './state';

/* function appBoundSelector<P extends {}[]>(
  selector: (appState: AppState, ...args: P) => {},
  appState: AppState,
  ...selectorParams: P
) {
  return selector(appState, ...selectorParams);
} */

export default function selectorFactory<S, T, U extends {}[]>(
  selector: (selectorState: S, ...args: U) => T,
  stateSelector: (appState: AppState, ...args: {}[]) => S
) {
  return function(appState: AppState, ...restOfParams: U) {
    const state = stateSelector(appState);
    return selector(state, ...restOfParams);
  };
}

export type DISelector = (appState: AppState, ...args: {}[]) => {};

export type BoundSelector = ((...args: {}[]) => {});

function bindSelectorsToAppState<T extends {}[]>(
  selectors: DISelector[],
  appState: AppState
): BoundSelector[] {
  return selectors.map(
    s =>
      function(...selectorArgs: T) {
        return s(appState, ...selectorArgs);
      }
  );
}

export function complexSelectorFactory<T extends {}[], U>(
  selectorCurry: (...boundSelectors: BoundSelector[]) => ((...args: T) => U),
  ...diSelectors: DISelector[]
) {
  return function(appState: AppState, ...restOfParams: T) {
    const selector = selectorCurry(
      ...bindSelectorsToAppState(diSelectors, appState)
    );
    return selector(...restOfParams);
  };
}

/* export default function selectorFactory<S, T, U extends {}[]>(
  selector: (selectorState: S, ...args: {}[]) => T,
  stateSelector: (appState: AppState, ...args: {}[]) => S,
  ...otherSelectors: ((appState: AppState, ...args: {}[]) => S)[]
) {
  return function(appState: AppState, ...callerParams: U) {
    const state = stateSelector(appState);

    let finalArgs = [...callerParams];

    if (otherSelectors && otherSelectors.length > 0) {
      finalArgs = otherSelectors.map(s => {
        return function(...boundArgs: {}[]) {
          s(appState, ...boundArgs);
        };
      });
    }

    return selector(state, ...finalArgs);
  };
}*/

// final calling function (used in connector) takes appState + input params
// enclosing function that produces final function takes dependencies.
