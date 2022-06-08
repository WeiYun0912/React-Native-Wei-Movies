import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function MovieRecommdations({ movieRecommdations, navigation }) {
  return (
    <View>
      <Text style={{ color: "#484848", fontSize: 23, fontWeight: "bold" }}>
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
