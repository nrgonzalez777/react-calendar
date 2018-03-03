import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './index';
import { AppState } from './state';

const middleware = [reduxThunk];

export default (): Store<AppState> =>
  createStore<AppState>(
    rootReducer,
    <AppState> {},
    composeWithDevTools(applyMiddleware(...middleware))
  );