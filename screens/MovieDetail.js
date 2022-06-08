import { SafeAreaView, View, ScrollView } from "react-native";
import React from "react";
import MovieAction from "../components/MovieDetail/MovieAction";
import useMovies from "../customHook/useMovies";

import MovieBanner from "../components/MovieDetail/MovieBanner";
import { GET_SINGLE_MOVIE, GET_MOVIE_CAST } from "../helper/ApiUrlHelper";
import MovieOverview from "../components/MovieDetail/MovieOverview";
import MovieCast from "../components/MovieDetail/MovieCast";

export default function MovieDetail({ route }) {
  const { id } = route.params;

  const movie = useMovies({ id: id }, GET_SINGLE_MOVIE);
  const movieCast = useMovies({ id: id }, GET_MOVIE_CAST);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
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
          <MovieCast movieCast={movieCast} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
