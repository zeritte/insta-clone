import { GET_DATA } from "./types";
import { captureError, sleep } from "../helpers";
import { mockData } from "../config";

export const getData = () => async dispatch => {
  try {
    dispatch({ type: GET_DATA.request });
    await sleep(2000);
    dispatch({ type: GET_DATA.success, payload: mockData });
  } catch (e) {
    dispatch({ type: GET_DATA.failure });
    captureError(e);
  }
};
