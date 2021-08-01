import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";

export function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle="dark-content"
      />
      <Text style={styles.TextTitle}>FITTR</Text>
      <Text style={styles.TextTagline}>An ML app that fits you</Text>
      <Text style={styles.TextStyle}>My Profile</Text>
      <View style={styles.container}>
        <View style={styles.SquareShapeView}>
          <Image
            style={styles.ImageStyle}
            source={require("../Assets/widget1.jpg")}
          />
        </View>
      </View>

      <Text style={styles.TextStyle}>My Recent Fits </Text>
      <View style={styles.container}>
        <View style={styles.SquareShapeView}>
          <Image
            style={styles.ImageStyle}
            source={require("../Assets/widget2.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  SquareShapeView: {
    marginTop: 10,
    width: 120 * 3,
    height: 170,
    //backgroundColor: "#00BCD4",
    backgroundColor: "#e32f45",
    borderRadius: 30,
  },

  RectangleShapeView: {
    marginTop: 10,
    width: 120 * 2,
    height: 200,
    backgroundColor: "#FFC107",
  },

  ImageStyle: {
    opacity: 0.9,
    borderRadius: 30,
    width: 360,
    height: 170,
  },

  TextStyle: {
    marginLeft: 35,
    marginTop: 25,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 15,
    fontFamily: "Verdana",
    color: "#696969",
  },
  TextTitle: {
    marginTop: 40,
    textAlign: "center",
    fontWeight: "800",
    fontSize: 50,
    color: "#e32f45",
    fontFamily: "Verdana",
  },
  TextTagline: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    fontFamily: "Verdana",
    color: "#696969",
    marginBottom: 20,
  },
});
