import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { logout } from "../actions/AuthActions";

export const ZHeader = React.memo(() => {
  const dispatch = useDispatch();
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => dispatch(logout())}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: { height: 50 }
});
