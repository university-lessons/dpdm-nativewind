import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between w-full">
      <Pressable className="w-[40] h-[40] bg-white items-center justify-center rounded">
        <Entypo name="chevron-small-left" size={24} color="black" />
      </Pressable>

      <Pressable className="w-[40] h-[40] bg-white items-center justify-center rounded">
        <Entypo name="dots-three-horizontal" size={16} color="black" />
      </Pressable>
    </View>
  );
}
