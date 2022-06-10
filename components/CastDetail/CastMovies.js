import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { DarkTheme, LightTheme } from "../../ThemeStyles";
import { ThemeContext } from "../../Theme";

export default function CastMovies({ castMovies, navigation }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Text
        style={{
          color:
            theme == "light"
              ? LightTheme.MoiveRecommend
              : DarkTheme.MoiveRecommend,
          fontSize: 23,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Cast Movies Top 10
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {castMovies.cast
          ?.sort((a, b) => b.popularity - a.popularity)
          .slice(0, 10)
          .map((movie) => (
            <View key={movie.id} style={{ marginRight: 10 }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate("MovieDetail", {
                    id: movie.id,
                  })
                }
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w400/${movie.poster_path}`,
                  }}
                  style={{
                    width: 200,
                    height: 300,
                    borderRadius: 8,
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
