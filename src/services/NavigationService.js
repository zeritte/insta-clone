import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

export const NavigationService = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  return (
    <NavigationContainer>
      {loggedIn ? (
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
