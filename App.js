import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

import CarItem from "./app/components/CarItem";
import cars from "./app/api/cars";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/images/logo.png")}
          style={styles.logo}
        />
        <Image
          source={require("./assets/images/menu.png")}
          style={styles.menu}
        />
      </View>
      <FlatList
        data={cars}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    paddingHorizontal: "7%",
    width: "100%",
    top: "7%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
  },
  logo: {
    height: 13,
    width: 100,
  },
  menu: {
    width: 25,
    height: 25,
  },
});
