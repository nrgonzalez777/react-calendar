import { combineReducers, Reducer } from 'redux';
import { Components } from './state';
import { default as calendar } from './Calendar/store';

const reducer: Reducer<Components> = combineReducers({
  calendar,
});

export default reducer;