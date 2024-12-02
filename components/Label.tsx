import { StyleSheet } from "react-native";
import React from "react";
import { HStack } from "./HStack";
import { Text } from "./Text";

interface LabelProps {
  leftTitle?: string;
  rightTitle?: string;
  mb?: number;
}
export default function Label({ leftTitle, rightTitle, mb }: LabelProps) {
  return (
    <HStack mt={16} mb={mb} alignItems="center" justifyContent="space-between">
      <Text fontSize={18} fontFamily="OutfitMedium">
        {leftTitle}
      </Text>
      <Text
        fontFamily="OutfitRegular"
        onPress={() => {
          console.log("button pressed");
        }}
      >
        {rightTitle}
      </Text>
    </HStack>
  );
}

const styles = StyleSheet.create({});
