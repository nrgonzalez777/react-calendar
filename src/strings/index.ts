import { AnyAction, Reducer } from 'redux';
import { Strings } from './state';
import en from './en';

// TODO: for time's sake we are just defaulting to EN here.
// However, this could easily be fleshed out to take an action.
const initState: Strings = { ...en };

const reducer: Reducer<Strings> = (state: Strings = initState, action: AnyAction): Strings => {
  return state;
};

export default reducer;