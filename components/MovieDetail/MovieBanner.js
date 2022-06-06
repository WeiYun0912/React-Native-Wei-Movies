import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function MovieBanner() {
  return (
    <View>
      <View>
        <ImageBackground
          source={{
            uri: "https://image.tmdb.org/t/p/w780/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
          }}
          style={{
            width: "100%",
            height: 250,
            backgroundColor: "rgb(0,0,0)",
          }}
          resizeMode="cover"
          imageStyle={{ opacity: 0.4 }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "60%",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "900" }}>
              Toy Story
            </Text>
            <Text style={{ color: "#afb6be", fontSize: 17 }}>
              Animation, Adventure, Family, Comedy
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: "40%",
            }}
          >
            <View
              style={{
                width: "45%",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
                }}
                style={{
                  width: 160,
                  height: 250,
                  borderRadius: 8,
                }}
                resizeMode="cover"
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="star" color="#FBCB0A" size={16} />
                <Text style={{ color: "#fff", fontSize: 17, marginLeft: 5 }}>
                  10 (4123 Reviews)
                </Text>
              </View>
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
                  124 mins
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="play" color="#fac310" size={16} />
                <Text style={{ color: "#ffffff", fontSize: 17, marginLeft: 5 }}>
                  Mar 6, 2019 Released
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
