import { View, Text, ScrollView, Image } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";

export default function MovieCast({ movieCast }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Text
        style={{
          color: theme == "light" ? "#484848" : "#fff",
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        {movieCast.cast?.slice(0, 10).map((cast) => (
          <View
            key={cast.cast_id}
            style={{ marginRight: 25, alignItems: "center" }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w185${cast.profile_path}`,
              }}
              style={{ width: 70, height: 70, borderRadius: 100 }}
              resizeMode="cover"
            />
            <Text
              style={{
                textAlign: "center",
                color: theme == "light" ? "#969696" : "#fff",
                fontWeight: "bold",
              }}
            >
              {cast.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
