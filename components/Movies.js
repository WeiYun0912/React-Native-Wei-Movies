import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import useMovies from "../customHook/useMovies";
import { GET_MOVIES } from "../helper/ApiUrlHelper";

export default function Movies({
  navigation,
  mainTitle,
  subTitle,
  nowPlaying,
  popular,
  topRated,
  upcoming,
  toyStory,
}) {
  const movies = useMovies(
    { topRated, nowPlaying, upcoming, popular, toyStory },
    GET_MOVIES
  );
  return (
    <View style={{ marginLeft: 5, marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "900", fontSize: 20, color: "#535353" }}>
            {mainTitle}
          </Text>
          <Text style={{ fontSize: 20, color: "#8a8a8a", marginLeft: 8 }}>
            {subTitle}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{ color: "#7272f7", fontSize: 18, marginRight: 5 }}>
              Show All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {movies.results?.map((movie) => (
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
    </View>
  );
}
