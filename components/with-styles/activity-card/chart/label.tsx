import { StyleSheet, Text, View } from "react-native";

type LabelProps = {
  text: string;
};

export default function Label({ text }: LabelProps) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -32,
    left: -8,
    width: 48,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
});
