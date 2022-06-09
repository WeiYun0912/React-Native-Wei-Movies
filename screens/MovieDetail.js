import { SafeAreaView, View, ScrollView } from "react-native";
import React, { useEffect, useContext, useRef } from "react";
import MovieAction from "../components/MovieDetail/MovieAction";
import useMovies from "../customHook/useMovies";

import MovieBanner from "../components/MovieDetail/MovieBanner";
import {
  GET_SINGLE_MOVIE,
  GET_MOVIE_CAST,
  GET_MOVIE_RECOMMENDATIONS,
} from "../helper/ApiUrlHelper";
import MovieOverview from "../components/MovieDetail/MovieOverview";
import MovieCast from "../components/MovieDetail/MovieCast";
import MovieRecommdations from "../components/MovieDetail/MovieRecommdations";
import { ThemeContext } from "../Theme";
import { DarkTheme, LightTheme } from "../ThemeStyles";

export default function MovieDetail({ route, navigation }) {
  const { id } = route.params;
  const { theme } = useContext(ThemeContext);
  const ref = useRef();

  const movie = useMovies({ id: id }, GET_SINGLE_MOVIE);
  const movieCast = useMovies({ id: id }, GET_MOVIE_CAST);
  const movieRecommdations = useMovies({ id: id }, GET_MOVIE_RECOMMENDATIONS);

  useEffect(() => {
    ref.current.scrollTo({ x: 0, y: 0 });
  }, [id]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          theme == "light"
            ? LightTheme.LightBackground
            : DarkTheme.DarkBackground,
      }}
    >
      <ScrollView ref={ref}>
        <View>
          <MovieBanner
            title={movie.original_title}
            backdrop={movie.backdrop_path}
            poster={movie.poster_path}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
            runtime={movie.runtime}
            release={movie.release_date}
          />
          <MovieAction />
        </View>
        <View style={{ marginTop: 30, padding: 20 }}>
          <MovieOverview overview={movie.overview} />
        </View>
        <View style={{ padding: 20 }}>
          <MovieCast movieCast={movieCast} navigation={navigation} />
        </View>
        <View style={{ padding: 20 }}>
          <MovieRecommdations
            movieRecommdations={movieRecommdations}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
