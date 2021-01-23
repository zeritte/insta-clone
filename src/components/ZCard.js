import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { ZDot } from "./ZDot";
import { ZImage } from "./ZImage";

const scrollViewProps = {
  pagingEnabled: true,
  horizontal: true,
  showsHorizontalScrollIndicator: false
};
const viewProps = {};

export const ZCard = React.memo(({ data }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const isGallery = data.imageUris.length > 1;
  const WrapperComponent = isGallery ? ScrollView : View; // decide on the wrapper
  const wrapperProps = isGallery ? scrollViewProps : viewProps; // decide on the wrapper props

  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>{data.title}</Text>
      <WrapperComponent
        {...wrapperProps}
        onScroll={e => setGalleryIndex(e.nativeEvent.contentOffset.x === 0 ? 0 : 1)}
        scrollEventThrottle={0}
      >
        {data.imageUris.map((uri, idx) => (
          <View key={idx}>
            <ZImage uri={uri} index={idx} />
          </View>
        ))}
      </WrapperComponent>
      <View style={styles.dotContainer}>
        {isGallery &&
          data.imageUris.map((_, idx) => (
            <View key={idx}>
              <ZDot filled={idx === galleryIndex} size={10} />
            </View>
          ))}
      </View>
      <Text style={styles.notImplementedText}>other little buttons and comment section...</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { borderWidth: 1, marginVertical: 20, backgroundColor: "#dbdbdb" },
  titleText: { textAlign: "center", fontSize: 20, paddingVertical: 5 },
  notImplementedText: { textAlign: "center", fontSize: 10, paddingVertical: 5 },
  dotContainer: { flexDirection: "row", alignSelf: "center" }
});
