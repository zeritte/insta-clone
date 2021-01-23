import React, { useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { useOrientation } from "../helpers";

export const ZImage = React.memo(({ uri, index }) => {
  const DIMENSIONS = useOrientation();
  const [loading, setLoading] = useState(true);

  const priority = index === 0 ? FastImage.priority.high : FastImage.priority.low; // images that fill the page first are prioritized
  return (
    <View style={[styles.imageContainer, { width: DIMENSIONS.width }]}>
      {loading && <ActivityIndicator size="large" color="black" style={styles.spinner} />}
      <FastImage
        style={[styles.image, { width: (DIMENSIONS.width * 2) / 3 }]}
        source={{
          uri,
          priority
        }}
        resizeMode={FastImage.resizeMode.contain}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { borderWidth: 1, marginVertical: 20, backgroundColor: "lightgray" },
  imageContainer: { flex: 1, alignItems: "center", paddingVertical: 5 },
  image: { flex: 1, height: 150 },
  spinner: { position: "absolute", top: "50%", bottom: "50%", zIndex: 1 }
});
