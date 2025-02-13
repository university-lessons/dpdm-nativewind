import { StyleSheet, View } from "react-native";
import Chart from "./chart/chart";
import Header from "./header";
import Stat from "./stat";

import { activities, stats } from "../../../mocks/lesson-mocks";

export default function ActivityCard() {
  return (
    <View style={styles.container}>
      <Header />

      <Chart activities={activities} />

      <View style={styles.stats}>
        {stats.map((stat, index) => (
          <Stat key={index} title={stat.title} description={stat.description} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(239 80 77)",
    padding: 32,
    borderRadius: 16,
    alignItems: "center",
  },
  stats: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});
