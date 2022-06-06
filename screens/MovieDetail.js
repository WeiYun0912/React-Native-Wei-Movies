import { SafeAreaView } from "react-native";
import React from "react";
import MovieTitle from "../components/MovieDetail/MovieTitle";
import useMovies from "../customHook/useMovies";
import { GET_SINGLE_MOVIE } from "../helper/ApiUrlHelper";
import MovieBanner from "../components/MovieDetail/MovieBanner";

export default function MovieDetail({ route }) {
  const { id } = route.params;

  const singleMovie = useMovies({ id: 862 }, GET_SINGLE_MOVIE);
  console.log(singleMovie);
  return (
    <SafeAreaView>
      <MovieBanner />
      <MovieTitle />
    </SafeAreaView>
  );
}
