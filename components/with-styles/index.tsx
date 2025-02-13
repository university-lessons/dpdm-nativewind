import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileCard from "./profile-card/profile-card";
import ActivityCard from "./activity-card/activity-card";

export default function ActivityScreenStyles() {
  return (
    <View style={styles.container}>
      <ProfileCard />

      <ActivityCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    gap: 16,
  },
});
