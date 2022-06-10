import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function CastBanner({
  poster1,
  poster2,
  birthday,
  name,
  birth,
}) {
  return (
    <View>
      <View>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w780${poster1?.[1].file_path}`,
          }}
          style={{
            width: "100%",
            height: 250,
            backgroundColor: "rgb(0,0,0)",
          }}
          resizeMode="cover"
          imageStyle={{ opacity: 0.4 }}
        >
          <BannerTitle name={name} />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: "40%",
            }}
          >
            <BannerImage poster2={poster2} />
            <View style={{ justifyContent: "center" }}>
              <CastBirthday birthday={birthday} />
              <CastBirth birth={birth} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const BannerTitle = ({ name }) => (
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
      {name}
    </Text>
    <Text style={{ color: "#afb6be", fontSize: 17 }}>
      Animation, Adventure, Family, Comedy
    </Text>
  </View>
);

const BannerImage = ({ poster2 }) => (
  <View
    style={{
      width: "45%",
      alignItems: "center",
    }}
  >
    <Image
      source={{
        uri: `https://image.tmdb.org/t/p/w780/${poster2}`,
      }}
      style={{
        width: 140,
        height: 200,
        borderRadius: 8,
      }}
      resizeMode="cover"
    />
  </View>
);

const CastBirthday = ({ birthday }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Ionicons name="calendar" color="#fff" size={16} />
    <Text style={{ color: "#fff", fontSize: 17, marginLeft: 5 }}>
      {birthday}
    </Text>
  </View>
);
const CastBirth = ({ birth }) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
    <Ionicons name="map" color="#fff" size={16} />
    <Text style={{ color: "#fff", fontSize: 17, marginLeft: 5 }}>{birth}</Text>
  </View>
);
