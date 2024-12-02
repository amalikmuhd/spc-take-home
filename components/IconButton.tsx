import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { HStack } from "./HStack";
import { IMAGES } from "@/constants/Images";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { Text } from "./Text";

interface IconButtonProps {
  source?: any;
  label?: string;
}

export default function IconButton({ source, label }: IconButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={source} style={{ width: 26, height: 26 }} />
      </TouchableOpacity>
      <Text fontFamily="OutfitMedium" color={Colors.lightText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
    backgroundColor: Colors.black,
    paddingHorizontal: 18,
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: Colors.borderColor,
    marginBottom: 8,
  },
});
