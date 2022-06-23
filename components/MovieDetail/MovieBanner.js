import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MovieGenre from "../../helper/MovieGenre";

export default function MovieBanner({
  backdrop,
  poster,
  title,
  voteAverage,
  voteCount,
  runtime,
  release,
  genres,
}) {
  const movieGenre = genres?.map((genre) =>
    MovieGenre.find((gen) => gen.id == genre.id)
  );

  return (
    <View>
      <View>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w780${backdrop}`,
          }}
          style={{
            width: "100%",
            height: 250,
            backgroundColor: "rgb(0,0,0)",
          }}
          resizeMode="cover"
          imageStyle={{ opacity: 0.4 }}
        >
          <BannerTitle title={title} movieGenre={movieGenre} />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: "40%",
            }}
          >
            <BannerImage poster={poster} />
            <View style={{ justifyContent: "center" }}>
              <MovieVoting voteAverage={voteAverage} voteCount={voteCount} />
              <MovieRuntime runtime={runtime} />
              <MovieRelease release={release} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const BannerTitle = ({ title, movieGenre }) => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      height: "60%",
    }}
  >
    <Text
      style={{
        color: "#fff",
        fontSize: 25,
        fontWeight: "900",
        textAlign: "center",
      }}
    >
      {title}
    </Text>
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {movieGenre?.map((genre, i) => (
        <Text key={genre.id} style={{ color: "#afb6be", fontSize: 17 }}>
          {movieGenre.length == i + 1 ? genre.name : genre.name + "," + " "}
        </Text>
      ))}
    </View>
  </View>
);

const BannerImage = ({ poster }) => (
  <View
    style={{
      width: "45%",
      alignItems: "center",
    }}
  >
    <Image
      source={{
        uri: `https://image.tmdb.org/t/p/w780${poster}`,
      }}
      style={{
        width: 140,
        height: 200,
        borderRadius: 8,
      }}
      resizeMode="contain"
    />
  </View>
);

const MovieVoting = ({ voteAverage, voteCount }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Ionicons name="star" color="#FBCB0A" size={16} />
    <Text style={{ color: "#fff", fontSize: 17, marginLeft: 5 }}>
      {voteAverage} ({voteCount} Reviews)
    </Text>
  </View>
);

const MovieRuntime = ({ runtime }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Ionicons name="time" color="#f7f7f7" size={16} />
    <Text
      style={{
        color: "#fff",
        fontSize: 17,
        marginVertical: 5,
        marginLeft: 5,
      }}
    >
      {runtime} mins
    </Text>
  </View>
);

const MovieRelease = ({ release }) => {
  const date = new Date(release).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const dateSplit = date.split(" ");
  const dateFormat = `${dateSplit[1]} ${dateSplit[2]}, ${dateSplit[4]}`;
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons name="play" color="#fac310" size={16} />
      <Text style={{ color: "#ffffff", fontSize: 17, marginLeft: 5 }}>
        {dateFormat} Released
      </Text>
    </View>
  );
};
