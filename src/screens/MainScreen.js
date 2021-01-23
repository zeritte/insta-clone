import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ZHeader, ZCard, ZSearch } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/MainActions";

const MainScreen = () => {
  const rawData = useSelector(state => state.main.data);
  const rawDataLoading = useSelector(state => state.main.dataLoading);
  const [data, setData] = useState([]);
  const [gridView, setGridView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  const onSearchSubmit = useCallback(() => {
    setData(rawData.filter(i => i.title.toLowerCase().includes(searchText.toLowerCase())));
    setGridView(searchText === "" ? false : true);
  }, [rawData, searchText]);

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
        ListEmptyComponent={() =>
          rawDataLoading ? <ActivityIndicator size="large" style={styles.spinner} /> : null
        }
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center" },
  flexGrow: { flexGrow: 1, maxWidth: "100%" },
  spinner: { flex: 1 }
});
