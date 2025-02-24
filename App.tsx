import { ScrollView } from "react-native";
import ActivityScreenStyles from "./components/with-styles";

import "./global.css";
import ActivityScreenTailwind from "./components/with-tailwind";

export default function App() {
  return (
    <ScrollView>
      {/* <ActivityScreenStyles /> */}

      <ActivityScreenTailwind />
    </ScrollView>
  );
}
