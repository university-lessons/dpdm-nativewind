import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type AvatarProps = {
  source: ImageSourcePropType;
};

export default function Avatar({ source }: AvatarProps) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(254 195 206)",
    width: 116,
    height: 116,
    borderRadius: 58,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
