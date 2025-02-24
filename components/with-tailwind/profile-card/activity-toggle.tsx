import React from "react";
import { Pressable, Text, View } from "react-native";

export default function ActivityToggle() {
  return (
    <View className="w-[240] h-[52] flex-row bg-white rounded-full items-center justify-center mt-4">
      <Pressable className="w-[120] h-[52] items-center justify-center">
        <Text>Diário</Text>
      </Pressable>

      <Pressable className="w-[120] h-[52] bg-black rounded-full items-center justify-center">
        <Text className="text-white">Semanal</Text>
      </Pressable>
    </View>
  );
}
