import { StyleSheet, Text, View } from "react-native";
import ActivityToggle from "./activity-toggle";
import Avatar from "./avatar";
import Header from "./header";

import { profile } from "../../../mocks/lesson-mocks";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <Header />

      <Avatar source={profile.avatar} />

      <Text style={styles.name}>{profile.name}</Text>

      <Text style={styles.description}>{profile.description}</Text>

      <ActivityToggle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(254 235 239)",
    padding: 32,
    borderRadius: 16,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  description: {
    fontSize: 12,
    color: "gray",
    marginTop: 8,
  },
});
