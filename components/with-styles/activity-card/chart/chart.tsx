import React from "react";
import { StyleSheet, View } from "react-native";
import Bar from "./bar";

type ChartProps = {
  activities: {
    timeMinutes: number;
    description: string;
  }[];
};

const BAR_MAX_HEIGHT = 160;

export default function Chart({ activities }: ChartProps) {
  const max = Math.max(...activities.map((activity) => activity.timeMinutes));

  const calculateHeight = (timeMinutes: number) => {
    return (timeMinutes / max) * BAR_MAX_HEIGHT;
  };

  const calculateAverage = () => {
    const sum = activities.reduce(
      (acc, activity) => acc + calculateHeight(activity.timeMinutes),
      0
    );
    return sum / activities.length;
  };

  return (
    <View>
      <View style={styles.container}>
        {activities.map((activity, index) => (
          <Bar
            key={index}
            height={calculateHeight(activity.timeMinutes)}
            text={activity.description}
            highlighted={activity.timeMinutes === max}
          />
        ))}
      </View>

      <View style={[styles.line, { bottom: calculateAverage() }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 32,
    marginBottom: 48,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(255,255,255,.6)",
    position: "absolute",
  },
});
