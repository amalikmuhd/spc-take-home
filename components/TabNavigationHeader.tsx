import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { HStack } from "./HStack";
import { IMAGES } from "@/constants/Images";
import { Image } from "expo-image";
import { VStack } from "./VStack";
import { Text } from "./Text";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export function TabNavigationHeader() {
  return (
    <HStack justifyContent="space-between" alignItems="center" mb={20}>
      <HStack gap={8}>
        <TouchableOpacity>
          <Image source={IMAGES.profilePNG} style={{ width: 42, height: 42 }} />
        </TouchableOpacity>
        <VStack>
          <HStack gap={5} mb={4}>
            <Text fontFamily={"Outfit-Regular"} color={Colors.lightText}>
              Good Morning
            </Text>
            <Image source={IMAGES.wavePNG} style={{ width: 20, height: 20 }} />
          </HStack>
          <Text fontFamily={"Outfit-Regular"} color={Colors.black}>
            Chaitanya Goyal
          </Text>
        </VStack>
      </HStack>
      <HStack gap={12} alignItems="center">
        <TouchableOpacity>
          <Image source={IMAGES.notification} style={{ width: 26, height: 26 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/bookmarks")}>
          <Image source={IMAGES.bookmark} style={{ width: 26, height: 26 }} />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
}

const styles = StyleSheet.create({});

export default TabNavigationHeader;
