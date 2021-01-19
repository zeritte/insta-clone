import { LOG_OUT } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_OUT.success:
      return INITIAL_STATE;
    default:
      return state;
  }
};
