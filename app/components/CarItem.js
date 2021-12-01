import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "../colors/Colors";
import AppButton from "./AppButton";

export default function CarItem({ car }) {
  const { name, tagline, taglineCTA, image } = car;
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.bgImg} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.special}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"custom order"}
          bgColor={Colors.darkgrey}
          color={Colors.white}
          onpress={() => console.log("ok")}
        />
        <AppButton
          title={"existing inventory"}
          bgColor={Colors.white}
          color={Colors.darkgrey}
          onpress={() => console.log("ok")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height,
    alignItems: "center",
  },
  bgImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: "50%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.darkgrey,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.lightgrey,
  },
  buttonContainer: {
    marginTop: "100%",
    width: "100%",
    alignItems: "center",
  },
  special: {
    textDecorationLine: "underline",
  },
});
