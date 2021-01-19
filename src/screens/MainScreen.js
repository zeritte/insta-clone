import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/AuthActions";

const MainScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Main Screen</Text>
      <Pressable onPress={() => dispatch(logout())}>
        <Text>logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
