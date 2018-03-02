import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>Calendar!</div>
  </Provider>
);

export default App;