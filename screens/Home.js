import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useContext } from "react";
import Movies from "../components/Movies";
import { FAB } from "react-native-elements";

import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../Theme";

export default function Home({ navigation }) {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
        onPress={() =>
          theme == "light" ? setTheme("dark") : setTheme("light")
        }

        // icon={<Ionicons name="sunny" color="#FBCB0A" size={25} />}
      />
    </SafeAreaView>
  );
}
