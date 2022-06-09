import { View, Text } from "react-native";
import React from "react";
import useMovies from "../customHook/useMovies";
import { GET_CAST_DETAIL } from "../helper/ApiUrlHelper";

export default function CastDetail({ route }) {
  const { personId } = route.params;

  const castDetail = useMovies({ personId }, GET_CAST_DETAIL);
  //cast image
  console.log(castDetail);

  return (
    <View>
      <Text>CastDetail</Text>
    </View>
  );
}
