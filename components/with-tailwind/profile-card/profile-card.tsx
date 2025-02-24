import { Text, View } from "react-native";
import ActivityToggle from "./activity-toggle";
import Avatar from "./avatar";
import Header from "./header";

import { profile } from "../../../mocks/lesson-mocks";

export default function ProfileCard() {
  return (
    <View className="bg-pink-100 p-8 rounded items-center">
      <Header />

      <Avatar source={profile.avatar} />

      <Text className="text-2xl font-bold mt-4">{profile.name}</Text>

      <Text className="text-sm text-gray-500 mt-2">{profile.description}</Text>

      <ActivityToggle />
    </View>
  );
}
