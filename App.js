import axios from "axios";

import RootNavigation from "./RootNavigation";

export default function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/";
  return <RootNavigation />;
}
