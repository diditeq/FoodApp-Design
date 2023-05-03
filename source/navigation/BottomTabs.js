//Bottom tabs 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import React from "react";

//Screens
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Search from "../screens/Search";
import Profile from "../screens/Profile";



const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/home1.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: "orange",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/content_icon.png")}
                  style={{
                    width: 25,
                    height: 20,
                    tintColor: "gray",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/search.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "gray",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/user.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "gray",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
