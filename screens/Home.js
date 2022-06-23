import { SafeAreaView, ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import Movies from "../components/Movies";
import { FAB } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../Theme";
import { DarkTheme, LightTheme } from "../ThemeStyles";

export default function Home({ navigation }) {
  const { setTheme, theme } = useContext(ThemeContext);

  const setDarkTheme = async () => {
    await AsyncStorage.setItem("@theme", "dark");
    setTheme("dark");
  };

  const setLightTheme = async () => {
    await AsyncStorage.setItem("@theme", "light");
    setTheme("light");
  };

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
      <View style={{ marginBottom: 10 }}>
        <ScrollView>
          <View>
            <Movies
              mainTitle="Now Playing"
              subTitle="Movies"
              nowPlaying={true}
              navigation={navigation}
            />
          </View>
          <View>
            <Movies
              mainTitle="Popular"
              subTitle="Movies"
              popular={true}
              navigation={navigation}
            />
          </View>
          <View>
            <Movies
              mainTitle="Top Rated"
              subTitle="Movies"
              topRated={true}
              navigation={navigation}
            />
          </View>
          <View>
            <Movies
              mainTitle="Upcoming"
              subTitle="Movies"
              upcoming={true}
              navigation={navigation}
            />
          </View>
          <View>
            <Movies
              mainTitle="Toy Story"
              subTitle="Collection"
              toyStory={true}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      </View>
      <FAB
        style={{
          zIndex: 9999,
          position: "absolute",
          right: 10,
          bottom: 30,
        }}
        color={theme == "light" ? "#4B5D67" : "#fff"}
        size="large"
        overlayColor="#454545"
        icon={
          theme == "light" ? (
            <Ionicons name="moon" color="#FBCB0A" size={25} />
          ) : (
            <Ionicons name="sunny" color="#FBCB0A" size={25} />
          )
        }
        onPress={() => (theme == "light" ? setDarkTheme() : setLightTheme())}

        // icon={<Ionicons name="sunny" color="#FBCB0A" size={25} />}
      />
    </SafeAreaView>
  );
}
