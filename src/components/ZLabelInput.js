import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export const ZLabelInput = ({ label, value, setValue, ...rest }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput style={styles.input} value={value} onChangeText={e => setValue(e)} {...rest} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  labelText: { flex: 1, fontSize: 16 },
  input: { flex: 2, height: 30, borderWidth: 1 }
});
