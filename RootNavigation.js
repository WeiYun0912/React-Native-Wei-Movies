import { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import FavoriteMovie from "./screens/FavoriteMovie";
import MovieDetail from "./screens/MovieDetail";
import { ThemeProvider } from "./Theme";

const BottomTab = createBottomTabNavigator();

const DarkTheme = {
  colors: {
    primary: "#fff",
    background: "#000",
    card: "#121212",
    text: "#fff",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function RootNavigation() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <NavigationContainer theme={theme == "light" ? DefaultTheme : DarkTheme}>
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
    </ThemeProvider>
  );
}
