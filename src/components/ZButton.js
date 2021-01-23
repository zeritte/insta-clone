import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

export const ZButton = React.memo(({ onPress, loading, label = "Submit", style }) => (
  <Pressable
    style={({ pressed }) => [
      pressed ? { backgroundColor: "rgb(210, 230, 255)" } : {},
      { height: 50, alignItems: "center", justifyContent: "center" },
      style
    ]}
    onPress={onPress}
  >
    {loading ? <ActivityIndicator /> : <Text>{label}</Text>}
  </Pressable>
));
