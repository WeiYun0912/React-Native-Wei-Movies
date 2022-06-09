import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";
import { LightTheme, DarkTheme } from "../../ThemeStyles";
export default function MovieCast({ movieCast, navigation }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Text
        style={{
          color:
            theme == "light"
              ? LightTheme.MovieCastTitle
              : DarkTheme.MovieCastTitle,
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        {movieCast.cast?.slice(0, 10).map((cast) => (
          <TouchableOpacity
            key={cast.cast_id}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("CastDetail", { personId: cast.id })
            }
          >
            <View style={{ marginRight: 25, alignItems: "center" }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w185${cast.profile_path}`,
                }}
                style={{ width: 70, height: 70, borderRadius: 100 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  textAlign: "center",
                  color:
                    theme == "light"
                      ? LightTheme.MovieCast
                      : DarkTheme.MovieCast,
                  fontWeight: "bold",
                }}
              >
                {cast.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
