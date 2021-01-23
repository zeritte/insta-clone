import "react-native-gesture-handler";
import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Keychain from "react-native-keychain";
import { captureError } from "../helpers";

import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/AuthActions";

const Stack = createStackNavigator();

export const NavigationService = () => {
  const dispatch = useDispatch();
  const uid = useSelector(state => state.auth.uid); // unique user id

  // use memo only runs once the app starts
  useMemo(async () => {
    try {
      // check if the user has logged in before
      const credentials = await Keychain.getGenericPassword();
      // if so, log in the user
      if (credentials) dispatch(login(credentials.username, credentials.password));
    } catch (error) {
      captureError(error);
    }
  }, [dispatch]);

  return (
    <NavigationContainer>
      {uid ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen options={{ animationEnabled: false }} name="Main" component={MainScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="Login"
            component={LoginScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
