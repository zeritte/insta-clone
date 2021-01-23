import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { ZButton } from "./ZButton";

export const ZSearch = React.memo(({ value, setValue, onSubmit }) => (
  <View style={styles.container}>
    <View style={styles.textInputContainer}>
      <TextInput
        value={value}
        onChangeText={setValue}
        autoCapitalize="none"
        placeholder="type to search"
        style={styles.textInput}
      />
    </View>
    <ZButton onPress={onSubmit} label="Search" style={styles.searchButton} />
  </View>
));

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginHorizontal: 10 },
  textInputContainer: { width: "70%" },
  textInput: { height: 30, borderWidth: 1, borderRadius: 20, paddingHorizontal: 10 },
  searchButton: { flex: 1, height: 30 }
});
