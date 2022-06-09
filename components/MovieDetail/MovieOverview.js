import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import { LightTheme, DarkTheme } from "../../ThemeStyles";
export default function MovieOverview({ overview = "" }) {
  const [showMoreText, setShowMoreText] = useState(false);

  const { theme } = useContext(ThemeContext);
  const ShortText = ({ overview }) => {
    let shortText = overview;
    if (overview.length > 150 && !showMoreText) {
      shortText = overview.substr(0, 150) + "...";
    }

    return <Text>{shortText}</Text>;
  };

  return (
    <View>
      <Text
        style={{
          color:
            theme == "light"
              ? LightTheme.MovieOverviewTitle
              : DarkTheme.MovieOverviewTitle,
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Overview
      </Text>
      <Text
        style={{
          color:
            theme == "light"
              ? LightTheme.MovieOverview
              : DarkTheme.MovieOverview,
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "justify",
        }}
      >
        <ShortText overview={overview} />
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setShowMoreText((prevBool) => !prevBool)}
      >
        <Text style={{ color: "#8b8bf9", fontSize: 16, fontWeight: "900" }}>
          {showMoreText ? "Show Less" : "Read More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
