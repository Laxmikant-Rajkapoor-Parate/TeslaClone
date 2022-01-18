import React from "react";
import { Image, StyleSheet, View } from "react-native";

import CarList from "../components/CarItem";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Image
          source={require("../../assets/images/menu.png")}
          style={styles.menu}
        />
      </View>
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
  logoContainer: {
    paddingHorizontal: "7%",
    width: "100%",
    top: "7%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 13,
    width: 100,
    zIndex: 1,
  },
  menu: {
    width: 25,
    height: 25,
    zIndex: 1,
  },
});
