import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Movies from "../components/Movies";
import { FAB } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginBottom: 10 }}>
        <ScrollView>
          <View>
            <Movies
              mainTitle="Popular"
              subTitle="Movies"
              sort_by="popularity.desc"
              navigation={navigation}
            />
          </View>
          <View>
            <Movies
              mainTitle="Top Rated"
              subTitle="Movies"
              sort_by="vote_count.desc"
              navigation={navigation}
            />
          </View>
          <View>
            <Movies
              mainTitle="Hot"
              subTitle="Movies"
              sort_by="revenue.desc"
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
        color="#4B5D67"
        size="large"
        overlayColor="#454545"
        icon={<Ionicons name="moon" color="#FBCB0A" size={25} />}
        // icon={<Ionicons name="sunny" color="#FBCB0A" size={25} />}
      />
    </SafeAreaView>
  );
}
