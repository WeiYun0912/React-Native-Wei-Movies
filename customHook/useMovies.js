import axios from "axios";
import { useState, useEffect } from "react";
import {
  GET_MOVIES,
  GET_SINGLE_MOVIE,
  GET_MOVIE_CAST,
  GET_MOVIE_RECOMMENDATIONS,
  GET_CAST_DETAIL,
} from "../helper/ApiUrlHelper";

const IMDB_API_KEY = "a7a877f8755c80969895d0d4749349af";
// https://api.themoviedb.org/3/movie/top_rated?api_key=a7a877f8755c80969895d0d4749349af
// https://api.themoviedb.org/3/search/movie?api_key=a7a877f8755c80969895d0d4749349af&query="Toy Story"
const useMovies = (searchParams, getDataType) => {
  const [movies, setMovies] = useState([]);
  const getMoviesData = async () => {
    let url = "";
    switch (getDataType) {
      case GET_MOVIES:
        if (searchParams.topRated)
          url = `/movie/top_rated?api_key=${IMDB_API_KEY}`;

        if (searchParams.nowPlaying)
          url = `/movie/now_playing?api_key=${IMDB_API_KEY}`;

        if (searchParams.popular)
          url = `/movie/popular?api_key=${IMDB_API_KEY}`;

        if (searchParams.upcoming)
          url = `/movie/upcoming?api_key=${IMDB_API_KEY}`;
        if (searchParams.toyStory) {
          url = `/search/movie?api_key=${IMDB_API_KEY}&query='Toy Story'`;
          console.log(url);
        }

        break;
      case GET_SINGLE_MOVIE:
        url = `/movie/${searchParams.id}?api_key=${IMDB_API_KEY}`;
        break;
      case GET_MOVIE_CAST:
        url = `/movie/${searchParams.id}/credits?api_key=${IMDB_API_KEY}&language=en-US`;
        break;
      case GET_MOVIE_RECOMMENDATIONS:
        url = `/movie/${searchParams.id}/recommendations?api_key=${IMDB_API_KEY}`;
        break;
      case GET_CAST_DETAIL:
        url = `/person/${searchParams.personId}?api_key=${IMDB_API_KEY}`;
        break;
    }

    const req = await axios.get(url);
    setMovies(req.data);
  };

  useEffect(() => {
    getMoviesData();
  }, [searchParams.id]);
  return movies;
};

export default useMovies;
