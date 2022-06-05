import axios from "axios";

import { View } from "react-native";
import RootNavigation from "./RootNavigation";

// https://www.themoviedb.org/documentation/api/discover
// https://developers.themoviedb.org/3/movies/get-movie-details
export default function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/";
  return <RootNavigation />;
}
