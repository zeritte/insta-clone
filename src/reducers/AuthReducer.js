import { LOG_IN, LOG_OUT } from "../actions/types";

const INITIAL_STATE = {
  uid: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN.request:
      return { ...state, uid: null, loginLoading: true };
    case LOG_IN.success:
      return { ...state, uid: action.payload, loginLoading: false };
    case LOG_IN.failure:
      return { ...state, loginLoading: false };
    case LOG_OUT.success:
      return INITIAL_STATE;
    default:
      return state;
  }
};
