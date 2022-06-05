import { ScrollView, View, Text, Image } from "react-native";
import React from "react";

export default function Movies({ movies }) {
  console.log(movies);
  return (
    <View style={{ marginLeft: 5, marginTop: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "600", fontSize: 20 }}>
          Recommend For You
        </Text>
        <Text style={{ color: "#3BACB6", fontSize: 18, marginRight: 5 }}>
          Show All
        </Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {movies.results?.map((movie) => (
            <View key={movie.id} style={{ marginRight: 10 }}>
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
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
