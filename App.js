import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";

import CarItem from "./app/components/CarItem";
import cars from "./app/api/cars";

export default function App() {
  return (
    <FlatList
      data={cars}
      keyExtractor={({ name }) => name}
      renderItem={({ item }) => <CarItem car={item} />}
      snapToAlignment={"start"}
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("screen").height}
    />
  );
}

const styles = StyleSheet.create({});
