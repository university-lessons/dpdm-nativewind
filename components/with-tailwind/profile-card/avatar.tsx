import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

type AvatarProps = {
  source: ImageSourcePropType;
};

export default function Avatar({ source }: AvatarProps) {
  return (
    <View className="bg-pink-300 w-[116] h-[116] rounded-full items-center justify-center">
      <Image source={source} className="w-[100] h-[100] rounded-full" />
    </View>
  );
}
