import axios from "axios";
import { useState, useEffect } from "react";
import {
  GET_MOVIES,
  GET_SINGLE_MOVIE,
  GET_MOVIE_CAST,
} from "../helper/ApiUrlHelper";

const IMDB_API_KEY = "a7a877f8755c80969895d0d4749349af";

const useMovies = (searchParams, getDataType) => {
  const [movies, setMovies] = useState([]);
  const getMoviesData = async () => {
    let url = "";
    switch (getDataType) {
      case GET_MOVIES:
        url = `/discover/movie?api_key=${IMDB_API_KEY}&sort_by=${searchParams.sort_by}`;
        break;
      case GET_SINGLE_MOVIE:
        url = `/movie/${searchParams.id}?api_key=${IMDB_API_KEY}`;
        break;
      case GET_MOVIE_CAST:
        url = `/movie/${searchParams.id}/credits?api_key=${IMDB_API_KEY}&language=en-US`;
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
