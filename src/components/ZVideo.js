import React, { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Video from "react-native-video";

export const ZVideo = React.memo(({ uri, isGridView = false }) => {
  const [playing, setPlaying] = useState(isGridView);
  return (
    <Pressable onPress={() => setPlaying(e => !e)}>
      {!playing && (
        <Image source={require("../../assets/img/play-button.png")} style={styles.playButton} />
      )}
      <Video source={{ uri }} style={styles.video} paused={!playing} repeat />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  video: { flex: 1, height: 150 },
  playButton: {
    height: 40,
    width: 40,
    position: "absolute",
    top: 50,
    alignSelf: "center",
    zIndex: 1
  }
});
