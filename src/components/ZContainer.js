import React from "react";
import { StyleSheet, Pressable, KeyboardAvoidingView, Keyboard, SafeAreaView } from "react-native";
import { isIOS } from "../helpers";

export const ZContainer = React.memo(({ children }) => (
  <KeyboardAvoidingView behavior={isIOS ? "padding" : "height"} style={styles.avoidingView}>
    <SafeAreaView style={styles.container}>
      <Pressable onPress={Keyboard.dismiss}>{children}</Pressable>
    </SafeAreaView>
  </KeyboardAvoidingView>
));

const styles = StyleSheet.create({
  avoidingView: { flex: 1, width: "100%" },
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});
