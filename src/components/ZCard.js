import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { ZImage } from "./ZImage";

const scrollViewProps = {
  pagingEnabled: true,
  horizontal: true,
  showsHorizontalScrollIndicator: false
};
const viewProps = {};

export const ZCard = React.memo(({ data }) => {
  const WrapperComponent = data.imageUris.length > 1 ? ScrollView : View; // decide on the wrapper
  const wrapperProps = WrapperComponent === ScrollView ? scrollViewProps : viewProps; // decide on the wrapper props

  return (
    <View style={styles.wrapper}>
      <WrapperComponent {...wrapperProps}>
        {data.imageUris.map((uri, idx) => (
          <View key={idx}>
            <Text style={styles.titleText}>{data.title}</Text>
            <ZImage uri={uri} index={idx} />
            <Text style={styles.notImplementedText}>
              other little buttons and comment section...
            </Text>
          </View>
        ))}
      </WrapperComponent>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { borderWidth: 1, marginVertical: 20, backgroundColor: "#dbdbdb" },
  titleText: { textAlign: "center", fontSize: 20, paddingVertical: 5 },
  notImplementedText: { textAlign: "center", fontSize: 10, paddingVertical: 5 }
});
