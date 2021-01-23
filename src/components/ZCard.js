import React from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { useOrientation } from "../helpers";

const scrollViewProps = {
  pagingEnabled: true,
  horizontal: true,
  showsHorizontalScrollIndicator: false
};
const viewProps = {};

export const ZCard = React.memo(({ data }) => {
  const DIMENSIONS = useOrientation();

  const WrapperComponent = data.imageUris.length > 1 ? ScrollView : View; // decide on the wrapper
  const wrapperProps = WrapperComponent === ScrollView ? scrollViewProps : viewProps; // decide on the wrapper props
  return (
    <View>
      <WrapperComponent style={styles.wrapper} {...wrapperProps}>
        {data.imageUris.map((uri, idx) => (
          <View key={idx} style={[styles.imageContainer, { width: DIMENSIONS.width }]}>
            <FastImage
              style={[styles.image, { width: (DIMENSIONS.width * 2) / 3 }]}
              source={{
                uri,
                priority: idx === 0 ? FastImage.priority.high : FastImage.priority.low // images that fill the page first are prioritized
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        ))}
      </WrapperComponent>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { marginVertical: 50 },
  imageContainer: { flex: 1, alignItems: "center" },
  image: { flex: 1, height: 150 }
});
