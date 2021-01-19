import { LOG_IN, LOG_OUT } from "./types";
import { captureError, sleep } from "../helpers";
import * as Keychain from "react-native-keychain";

export const login = (username, password) => async dispatch => {
  try {
    dispatch({ type: LOG_IN.request });
    await sleep(1000);
    // see https://github.com/oblador/react-native-keychain#setgenericpasswordusername-password--accesscontrol-accessible-accessgroup-service-securitylevel-
    await Keychain.setGenericPassword(username, password);
    dispatch({ type: LOG_IN.success, payload: "some-unique-user-id" });
  } catch (e) {
    dispatch({ type: LOG_IN.failure });
    captureError(e);
  }
};

export const logout = () => async dispatch => {
  await Keychain.resetGenericPassword();
  dispatch({ type: LOG_OUT.success });
};
