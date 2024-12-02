import { defaultShortcuts, ShortCutsProps } from "@/styles/shortcuts";
import { PropsWithChildren } from "react";
import { AnimatableNumericValue, ColorValue, StyleProp, View, ViewProps } from "react-native";

export interface StackProps extends PropsWithChildren, ShortCutsProps, ViewProps {
  flex?: number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: number;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  style?: StyleProp<ViewProps>;
  radius?: string | AnimatableNumericValue | undefined;
  bg?: ColorValue | undefined;
  borderColor?: ColorValue | undefined;
  borderWidth?: number | undefined;
}

export default function Stack({
  flex,
  direction,
  gap,
  alignItems,
  justifyContent,
  children,
  radius,
  bg,
  borderColor,
  borderWidth,
  style,
  ...restProps
}: StackProps) {
  return (
    <View
      style={[
        defaultShortcuts(restProps),
        {
          flex: flex,
          flexDirection: direction,
          gap: gap,
          alignItems,
          justifyContent,
          borderRadius: radius,
          backgroundColor: bg,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
        style,
      ]}
      {...restProps}
    >
      {children}
    </View>
  );
}
