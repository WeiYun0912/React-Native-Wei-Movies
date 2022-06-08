import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../../Theme";

export default function MovieTitle() {
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
        <TouchableOpacity activeOpacity={0.7}>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="bookmarks-outline"
              size={30}
              color={theme == "light" ? "#000" : "#fff"}
            />
            <Text
              style={{
                fontSize: 15,
                color: theme == "light" ? "#000" : "#fff",
              }}
            >
              Watchlist
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="heart-outline"
            size={30}
            color={theme == "light" ? "#000" : "#fff"}
          />
          <Text
            style={{ fontSize: 15, color: theme == "light" ? "#000" : "#fff" }}
          >
            Favourite
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="share-social-outline"
            size={30}
            color={theme == "light" ? "#000" : "#fff"}
          />
          <Text
            style={{ fontSize: 15, color: theme == "light" ? "#000" : "#fff" }}
          >
            Share
          </Text>
        </View>
      </View>
    </View>
  );
}
