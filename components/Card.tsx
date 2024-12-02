import { GestureResponderEvent, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { HStack } from "./HStack";
import { Text } from "./Text";
import { IMAGES } from "@/constants/Images";
import { Image } from "expo-image";
import { VStack } from "./VStack";

interface CardProps {
  name?: string;
  title?: string;
  amount?: string;
  starRate?: string;
  reviews?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  mb?: number;
  mt?: number;
  toggle?: boolean;
}
export default function Card({ mb, mt, name, title, amount, starRate, reviews, toggle, onPress }: CardProps) {
  const width = useWindowDimensions().width;
  return (
    <HStack mt={mt} mb={mb} gap={30} pt={16} pl={16} pb={20} bg={"white"} radius={16} style={styles.container as never}>
      <Image source={IMAGES.kylee} style={{ width: 100, height: 100, backgroundColor: "red", borderRadius: 10 }} />
      <VStack>
        <HStack gap={width / 4} mb={11}>
          <Text>{name}</Text>
          <TouchableOpacity onPress={onPress}>
            <Image source={toggle ? IMAGES.bookmarkBroken : IMAGES.bookmark} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </HStack>
        <Text fontFamily="OutfitMedium" fontSize={16} mb={8}>
          {title}
        </Text>
        <Text fontFamily="OutfitMedium" fontSize={16} mb={8}>
          {amount}
        </Text>
        <HStack alignItems="center" gap={10}>
          <Image source={IMAGES.starBroken} style={{ width: 14, height: 14 }} />
          <HStack>
            <Text>{starRate}</Text>
            <Text>{` | ${reviews} reviews`}</Text>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 0.15,
    elevation: 1,
  },
});
