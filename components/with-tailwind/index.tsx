import React from "react";
import { View } from "react-native";
import ActivityCard from "./activity-card/activity-card";
import ProfileCard from "./profile-card/profile-card";

export default function ActivityScreenTailwind() {
  return (
    <View className="mt-6 flex-1 bg-white p-4 gap-4">
      <ProfileCard />

      <ActivityCard />
    </View>
  );
}
