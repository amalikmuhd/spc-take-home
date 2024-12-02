import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Text } from "./Text";

interface CustomButtonProps {
  toggle?: boolean;
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function CustomButton({ toggle, title, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        borderWidth: 1,
        borderColor: toggle ? Colors.bg : Colors.black,
        backgroundColor: toggle ? Colors.black : Colors.bgWhite,
      }}
    >
      <Text color={toggle ? Colors.bg : Colors.black}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 16,
  },
});
