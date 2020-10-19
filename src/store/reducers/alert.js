import { ALERT_ERROR } from '../actions/actionTypes';

const initialState = {
  alerts: [],
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case ALERT_ERROR:
      return {
        ...state,
        alerts: [action.payload.message],
      };
    default:
      return state;
  }
}
