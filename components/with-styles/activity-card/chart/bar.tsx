import React from "react";
import { StyleSheet, View } from "react-native";
import Label from "./label";

type BarProps = {
  height: number;
  text: string;
  highlighted: boolean;
};

export default function Bar({ height, text, highlighted }: BarProps) {
  return (
    <View
      style={[
        styles.container,
        { height },
        highlighted && { backgroundColor: "white" },
      ]}
    >
      <Label text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 32,
    backgroundColor: "rgba(255,255,255,.2)",
    borderRadius: 8,
  },
});
