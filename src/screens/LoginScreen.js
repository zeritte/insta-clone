import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ZButton, ZLabelInput, ZContainer } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/AuthActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const loginLoading = useSelector(state => state.auth.loginLoading);
  const dispatch = useDispatch();

  const startLogin = useCallback(() => {
    dispatch(login(email, pass));
  }, [dispatch, email, pass]);

  return (
    <ZContainer>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Instagram Clone</Text>
      </View>
      <View style={styles.inputAreaContainer}>
        <ZLabelInput label="Email" value={email} setValue={setEmail} autoCapitalize="none" />
        <ZLabelInput label="Password" value={pass} setValue={setPass} secureTextEntry />
        <ZButton loading={loginLoading} onPress={startLogin} />
      </View>
    </ZContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  headerContainer: { flex: 1, justifyContent: "center" },
  headerText: { fontSize: 28, textAlign: "center" },
  inputAreaContainer: { flex: 2, width: "100%" }
});
