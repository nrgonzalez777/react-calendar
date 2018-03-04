import { combineReducers, AnyAction, Reducer } from 'redux';
import { AppointmentEditor } from './state';
import { ADD_APPOINTMENT } from '../../AddAppointment/store/types';
import { APPOINTMENT_EDITOR_CLOSE } from './types';

const isVisible = (state: boolean = false, action: AnyAction): boolean => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return true;
    case APPOINTMENT_EDITOR_CLOSE:
      return false;
    default:
      return state;
  }
};

const reducer: Reducer<AppointmentEditor> = combineReducers({
  isVisible,
});

export default reducer;