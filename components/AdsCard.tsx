import { StyleSheet } from "react-native";
import React from "react";
import { Image, ImageBackground } from "expo-image";
import { IMAGES } from "@/constants/Images";
import { Text } from "./Text";
import { Colors } from "@/constants/Colors";
import { VStack } from "./VStack";
import { HStack } from "./HStack";

export default function AdsCard() {
  return (
    <HStack justifyContent="space-between" pt={26} bg={Colors.black} radius={20} mt={20}>
      <Image
        source={IMAGES.vectorBackground}
        style={{ width: "100%", height: "100%", position: "absolute", paddingVertical: 20 }}
        contentFit="contain"
      />
      <VStack pl={26} mb={26}>
        <Text fontSize={36} fontFamily="OutfitMedium" color={Colors.fontColor} mb={5}>
          30 %
        </Text>
        <Text fontSize={18} fontFamily="OutfitMedium" color={Colors.fontColor} mb={7}>
          Today Special
        </Text>
        <Text fontSize={12} fontFamily="OutfitMedium" color={Colors.bgWhite}>
          Get discount for every
          <Text fontSize={12} fontFamily="OutfitMedium" color={Colors.bgWhite}>
            {" \n"}
            order, only valid for today
          </Text>
        </Text>
      </VStack>
      <Image source={IMAGES.man} style={{ width: 100, height: "auto" }} />
    </HStack>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 325,
    height: 155,

    paddingTop: 22,
    borderRadius: 30,
  },
});
