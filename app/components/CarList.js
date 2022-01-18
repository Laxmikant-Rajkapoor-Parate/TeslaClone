import React from "react";
import { StyleSheet, FlatList, Dimensions, View } from "react-native";

import CarItem from "./CarItem";

const cars = [
  {
    name: "Model S",
    tagline: "Starting at $69,420",
    image: require("../../assets/images/ModelS.jpeg"),
  },
  {
    name: "Model 3",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../../assets/images/Model3.jpeg"),
  },
  {
    name: "Model X",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../../assets/images/ModelX.jpeg"),
  },
  {
    name: "Model Y",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("../../assets/images/ModelY.jpeg"),
  },
];

export default function CarList() {
  return (
    <View>
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

const styles = StyleSheet.create({});
