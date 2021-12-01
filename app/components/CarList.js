import React from "react";
import { StyleSheet, FlatList, Dimensions, View } from "react-native";

import CarItem from "./CarItem";
import cars from "../api/cars";

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
