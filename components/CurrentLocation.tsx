import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { HStack } from "./HStack";
import { IMAGES } from "@/constants/Images";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";

export default function CurrentLocation() {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={IMAGES.location} style={{ width: 26, height: 26 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
    backgroundColor: Colors.bgSecondary,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 1,
    flex: 0.1,
    borderColor: Colors.borderColor,
  },
});
