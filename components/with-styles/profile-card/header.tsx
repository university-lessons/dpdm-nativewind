import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Entypo name="chevron-small-left" size={24} color="black" />
      </Pressable>

      <Pressable style={styles.button}>
        <Entypo name="dots-three-horizontal" size={16} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
