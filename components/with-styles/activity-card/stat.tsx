import { View, Text, StyleSheet } from "react-native";
import React from "react";

type StatProps = {
  title: string;
  description: string;
};

export default function Stat({ title, description }: StatProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 12,
  },
});
