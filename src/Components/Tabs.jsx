import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../Pages/Home";
import { CreateFit } from "../Pages/CreateFit";
import { UploadPicture } from "../Pages/UploadPictures";
import { Closet } from "../Pages/Closet";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...style.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#e32f45",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../Assets/Icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Upload Pictures"
        component={UploadPicture}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../Assets/Icons/plus_button.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#ffffff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Closet"
        component={Closet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../Assets/Icons/closet.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Closet
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create Fit"
        component={CreateFit}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../Assets/Icons/shirt.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Create Fit
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF9",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    // elevation: 5,
  },
});
