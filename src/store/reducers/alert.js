import { ALERT_ERROR, ALERT_SUCCESS } from '../actions/actionTypes';

const initialState = {
  alerts: [],
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        ...state,
        alerts: [action.payload.message],
      };

    case ALERT_ERROR:
      return {
        ...state,
        alerts: [action.error.message],
      };

    default:
      return state;
  }
}
