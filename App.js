import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/Components/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
