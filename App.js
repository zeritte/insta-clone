import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { NavigationService } from "./src/services";
import { store } from "./src/helpers";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationService />
    </Provider>
  );
}
