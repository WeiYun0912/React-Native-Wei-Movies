import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";

export default function MovieRecommdations({ movieRecommdations, navigation }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Text
        style={{
          color: theme == "light" ? "#484848" : "#fff",
          fontSize: 23,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Recommend
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movieRecommdations.results?.map((movie) => (
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
