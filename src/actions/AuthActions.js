import { LOG_IN, LOG_OUT } from "./types";
import { captureError, sleep } from "../helpers";

export const login = () => async dispatch => {
  try {
    dispatch({ type: LOG_IN.request });
    await sleep(3000);
    dispatch({ type: LOG_IN.success, payload: "some-unique-user-id" });
  } catch (e) {
    dispatch({ type: LOG_IN.failure });
    captureError(e);
  }
};

export const logout = () => dispatch => dispatch({ type: LOG_OUT.success });
