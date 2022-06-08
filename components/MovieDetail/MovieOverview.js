import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const s =
  "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.";

export default function MovieOverview() {
  const [showMoreText, setShowMoreText] = useState(false);
  const ShortText = ({ description }) => {
    let shortText = description;
    if (description.length > 150 && !showMoreText) {
      shortText = description.substr(0, 150) + "...";
    }

    return <Text>{shortText}</Text>;
  };

  return (
    <View>
      <Text style={{ color: "#484848", fontSize: 23, fontWeight: "bold" }}>
        Overview
      </Text>
      <Text
        style={{
          color: "#969696",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "justify",
        }}
      >
        <ShortText description={s} />
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
