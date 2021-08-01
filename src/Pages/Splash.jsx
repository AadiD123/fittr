import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Splash() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Get laid tonight!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F6D7A",
  },
});
