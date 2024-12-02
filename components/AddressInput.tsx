import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { HStack } from "./HStack";
import { IMAGES } from "@/constants/Images";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";

export default function AddressInput() {
  return (
    <HStack
      justifyContent="space-between"
      py={13}
      bg={Colors.bgSecondary}
      radius={8}
      pl={8}
      pr={10}
      flex={1}
      borderWidth={1}
      borderColor={Colors.borderColor}
    >
      <HStack gap={4} alignItems="center">
        <Image source={IMAGES.landmark} style={{ width: 22, height: 22 }} />
        <TextInput
          placeholder="267 New AVenue Park.Indore In..."
          placeholderTextColor={Colors.lightText}
          style={styles.input}
        />
      </HStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "OutfitRegular",
    fontSize: 14,
    color: Colors.black,
    backgroundColor: Colors.bgSecondary,
  },
});
