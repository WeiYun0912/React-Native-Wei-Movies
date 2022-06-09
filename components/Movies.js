import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import useMovies from "../customHook/useMovies";
import { GET_MOVIES } from "../helper/ApiUrlHelper";
import { ThemeContext } from "../Theme";
import { DarkTheme, LightTheme } from "../ThemeStyles";

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
              color:
                theme == "light"
                  ? LightTheme.MovieMainTitle
                  : DarkTheme.MovieMainTitle,
            }}
          >
            {mainTitle}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color:
                theme == "light"
                  ? LightTheme.MovieSubTitle
                  : DarkTheme.MovieSubTitle,
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
                color:
                  theme == "light" ? LightTheme.ShowAll : DarkTheme.ShowAll,
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
