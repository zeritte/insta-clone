/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View } from "react-native";

export const ZDot = React.memo(({ filled, size = 15 }) => (
  <View
    style={{
      height: size,
      width: size,
      backgroundColor: filled ? "black" : "lightblue",
      borderRadius: size,
      marginRight: 10
    }}
  />
));
