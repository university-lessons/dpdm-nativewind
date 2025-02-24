import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function ActivityToggle() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.inactiveButton}>
        <Text>Diário</Text>
      </Pressable>

      <Pressable style={styles.activeButton}>
        <Text style={styles.whiteText}>Semanal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 240,
    height: 52,
    borderRadius: 26,
    marginTop: 16,
    flexDirection: "row",
  },
  inactiveButton: {
    width: 120,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "black",
    width: 120,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
  },
});
