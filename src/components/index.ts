import { combineReducers, Reducer } from 'redux';
import { Components } from './state';
import { default as appointmentEditor } from './AppointmentEditor/store';
import { default as calendar } from './Calendar/store';

const reducer: Reducer<Components> = combineReducers({
  appointmentEditor,
  calendar,
});

export default reducer;