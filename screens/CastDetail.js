import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import useMovies from "../customHook/useMovies";
import {
  GET_CAST_DETAIL,
  GET_CAST_IMAGE,
  GET_CAST_MOVIES,
} from "../helper/ApiUrlHelper";
import CastBanner from "../components/CastDetail/CastBanner";
import { LightTheme } from "../ThemeStyles";
import { DarkTheme } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
import CastAction from "../components/CastDetail/CastAction";
import CastBiography from "../components/CastDetail/CastBiography";
import CastMovies from "../components/CastDetail/CastMovies";

export default function CastDetail({ route, navigation }) {
  const { personId } = route.params;

  const castDetail = useMovies({ personId }, GET_CAST_DETAIL);
  const castImage = useMovies({ personId }, GET_CAST_IMAGE);
  const castMovies = useMovies({ personId }, GET_CAST_MOVIES);

  const { theme } = useContext(ThemeContext);

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
      <ScrollView>
        <View>
          <CastBanner
            poster1={castImage.profiles}
            poster2={castDetail.profile_path}
            biography={castDetail.biography}
            birthday={castDetail.birthday}
            name={castDetail.name}
            birth={castDetail.place_of_birth}
          />
          <CastAction />
        </View>
        <View style={{ marginTop: 30, padding: 20 }}>
          <CastBiography biography={castDetail.biography} />
        </View>
        <View style={{ padding: 20 }}>
          <CastMovies castMovies={castMovies} navigation={navigation} />
        </View>
        {/* <View style={{ padding: 20 }}></View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
