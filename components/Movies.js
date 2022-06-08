import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import useMovies from "../customHook/useMovies";
import { GET_MOVIES } from "../helper/ApiUrlHelper";
import { ThemeContext } from "../Theme";

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

  const { theme } = useContext(ThemeContext);

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
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
              color: theme == "light" ? "#535353" : "#fff",
            }}
          >
            {mainTitle}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: theme == "light" ? "#8a8a8a" : "#fff",
              marginLeft: 8,
            }}
          >
            {subTitle}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                color: theme == "light" ? "#7272f7" : "#00AFC1",
                fontSize: 18,
                marginRight: 5,
              }}
            >
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
