import React from "react";
import { StatusBar } from "react-native";

import { Provider } from "react-redux";
import { store } from "./src/helpers";
import { NavigationService } from "./src/services";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationService />
    </Provider>
  );
}
