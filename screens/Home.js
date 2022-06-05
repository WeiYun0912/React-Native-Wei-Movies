import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from "react-native";
import React from "react";
import Movies from "../components/Movies";
import axios from "axios";
import { useState, useEffect } from "react";

const IMDB_API_KEY = "a7a877f8755c80969895d0d4749349af";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const getMoviesData = async () => {
    const req = await axios.get(
      `/discover/movie?api_key=${IMDB_API_KEY}&sort_by=popularity.desc`
    );
    setMovies(req.data);
  };
  useEffect(() => {
    console.log("GET MOVIES EFFECT");
    getMoviesData();
  }, []);

  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView>
        <Movies movies={movies} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "android" ? 25 : 0,
  },
});
