import { GET_DATA, LOG_OUT } from "../actions/types";

const INITIAL_STATE = {
  dataLoading: false,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA.request:
      return { ...state, dataLoading: true, data: [] };
    case GET_DATA.success:
      return { ...state, dataLoading: false, data: action.payload };
    case GET_DATA.failure:
      return { ...state, dataLoading: false };
    case LOG_OUT.success:
      return INITIAL_STATE;
    default:
      return state;
  }
};
