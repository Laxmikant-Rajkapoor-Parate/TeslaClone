import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default function AppButton({ title, color, bgColor, onpress }) {
  return (
    <TouchableHighlight
      onPress={onpress}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </TouchableHighlight>
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
