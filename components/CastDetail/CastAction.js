import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { LightTheme, DarkTheme } from "../../ThemeStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../../Theme";

export default function CastAction() {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
      }}
    >
      <View style={{ width: "40%" }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "60%",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="heart-outline"
            size={30}
            color={
              theme == "light"
                ? LightTheme.MovieActionIcon
                : DarkTheme.MovieActionIcon
            }
          />
          <Text
            style={{
              fontSize: 15,
              color:
                theme == "light"
                  ? LightTheme.MovieActionText
                  : DarkTheme.MovieActionText,
            }}
          >
            Favourite
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="share-social-outline"
            size={30}
            color={
              theme == "light"
                ? LightTheme.MovieActionIcon
                : DarkTheme.MovieActionIcon
            }
          />
          <Text
            style={{
              fontSize: 15,
              color:
                theme == "light"
                  ? LightTheme.MovieActionText
                  : DarkTheme.MovieActionText,
            }}
          >
            Share
          </Text>
        </View>
      </View>
    </View>
  );
}
