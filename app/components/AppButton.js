import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../colors/Colors";

export default function AppButton({ title, color, bgColor, onpress }) {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    marginBottom: 18,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
