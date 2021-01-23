import React, { useCallback, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ZHeader, ZCard, ZSearch } from "../components";
import { mockData } from "../config";

import { useDispatch, useSelector } from "react-redux";

const MainScreen = () => {
  const [data, setData] = useState(mockData.slice(0, 1));
  const [gridView, setGridView] = useState(true);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const onSearchSubmit = useCallback(() => {
    setData(mockData.filter(i => i.title.toLowerCase().includes(searchText.toLowerCase())));
    setGridView(true);
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <ZHeader />
      <ZSearch value={searchText} setValue={setSearchText} onSubmit={onSearchSubmit} />
      <FlatList
        data={data}
        numColumns={gridView ? 2 : 1}
        key={gridView.toString()} // flatlist doesnt support on the fly numcolumn change, so key prop is added to re-render
        contentContainerStyle={styles.flexGrow}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <ZCard isGridView={gridView} data={item} />}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center" },
  flexGrow: { flexGrow: 1, maxWidth: "100%" }
});
