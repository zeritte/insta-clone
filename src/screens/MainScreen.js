import React from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ZContainer, ZHeader, ZCard } from "../components";
import { mockData } from "../config";

import { useDispatch, useSelector } from "react-redux";

const MainScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ZHeader />
      <FlatList
        data={mockData}
        contentContainerStyle={styles.flexGrow}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <ZCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center" },
  flexGrow: { flexGrow: 1 }
});
