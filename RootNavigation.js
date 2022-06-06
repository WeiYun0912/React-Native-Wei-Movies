import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteMovie from "./screens/FavoriteMovie";
import MovieDetail from "./screens/MovieDetail";

const BottomTab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
            },

            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons color={color} name="home" size={30} />
            ),
          }}
        />

        <BottomTab.Screen
          name="FavoriteMovie"
          component={FavoriteMovie}
          options={{
            title: "Your Favorite Movies",
            tabBarLabel: "Favorite",
            tabBarBadge: 5,
            tabBarActiveTintColor: "#ff0000",
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                color={color}
                name="cards-heart"
                size={30}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{
            tabBarStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              display: "none",
            },
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
