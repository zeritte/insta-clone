import React, { useMemo, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useGridViewWidth } from "../helpers";
import { ZDot } from "./ZDot";
import { ZImage } from "./ZImage";
import { ZVideo } from "./ZVideo";

const scrollViewProps = {
  pagingEnabled: true,
  horizontal: true,
  showsHorizontalScrollIndicator: false
};
const viewProps = {};

export const ZCard = React.memo(({ data, isGridView }) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const isVideo = !!data.videoUri;
  const isGallery = data.imageUris?.length > 1;
  const WrapperComponent = isGallery ? ScrollView : View; // decide on the wrapper
  const wrapperProps = useMemo(
    // memoize it so that wont be calculated on every render
    () =>
      isGallery // decide on the wrapper props
        ? {
            ...scrollViewProps,
            onScroll: e => setGalleryIndex(e.nativeEvent.contentOffset.x === 0 ? 0 : 1),
            scrollEventThrottle: 0
          }
        : viewProps,
    [isGallery]
  );

  const width = useGridViewWidth(isGridView);
  const gridViewStyles = {
    width: width,
    marginVertical: isGridView ? 0 : 10
  };

  return (
    <View style={[styles.wrapper, gridViewStyles]}>
      <Text style={styles.titleText}>{data.title}</Text>
      {isVideo ? (
        <ZVideo uri={data.videoUri} isGridView={isGridView} />
      ) : (
        <>
          <WrapperComponent {...wrapperProps}>
            {data.imageUris?.map((uri, idx) => (
              <View key={idx}>
                <ZImage uri={uri} index={idx} isGridView={isGridView} />
              </View>
            ))}
          </WrapperComponent>
          <View style={styles.dotContainer}>
            {isGallery &&
              data.imageUris?.map((_, idx) => (
                <View key={idx}>
                  <ZDot filled={idx === galleryIndex} size={10} />
                </View>
              ))}
          </View>
        </>
      )}
      <Text style={styles.notImplementedText}>other little buttons and comment section...</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { borderWidth: 1, backgroundColor: "#dbdbdb" },
  titleText: { textAlign: "center", fontSize: 20, paddingVertical: 5 },
  notImplementedText: { textAlign: "center", fontSize: 10, paddingVertical: 5 },
  dotContainer: { flexDirection: "row", alignSelf: "center" }
});
