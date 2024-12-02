import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { HStack } from "./HStack";
import { IMAGES } from "@/constants/Images";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";

export default function SearchInput() {
  return (
    <HStack justifyContent="space-between" py={13} bg={Colors.bg} radius={8} pl={24} pr={10}>
      <HStack gap={10} alignItems="center">
        <Image source={IMAGES.search} style={{ width: 22, height: 22 }} />
        <TextInput placeholder="Search..." placeholderTextColor={Colors.lightText} style={styles.input} />
      </HStack>
      <TouchableOpacity>
        <Image source={IMAGES.filter} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    </HStack>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "OutfitRegular",
    fontSize: 14,
    color: Colors.black,
  },
});
