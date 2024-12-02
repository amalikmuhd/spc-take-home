import { PropsWithChildren } from "react";
import { TextProps, Text as RNText, ColorValue, useWindowDimensions } from "react-native";
import { defaultShortcuts, ShortCutsProps } from "@/styles/shortcuts";

interface CustomTextProps extends PropsWithChildren, ShortCutsProps, TextProps {
  fontSize?: number;
  fontFamily?: string;
  textAlign?: "center" | "left" | "right" | "auto" | "justify";
  bold?: boolean;
  underline?: boolean;
  color?: ColorValue;
}

// RNText.defaultProps = RNText.defaultProps || {};
// RNText.defaultProps.maxFontSizeMultiplier = 1; // the maximum amount the font size will scale.
// RNText.defaultProps = Text.defaultProps || {};
// RNText.defaultProps.maxFontSizeMultiplier = 1;

export function Text({
  fontSize = 14,
  bold,
  underline,
  children,
  fontFamily,
  textAlign = "left",
  color,
  ...restProps
}: CustomTextProps) {
  const { fontScale } = useWindowDimensions(); // import useWindowDimensions()
  // const styles = makeStyles(fontScale); // pass in fontScale to the StyleSheet
  return (
    <RNText
      style={[
        defaultShortcuts(restProps),
        {
          fontSize: fontSize / fontScale,
          fontFamily,
          textAlign,
          fontWeight: bold ? "bold" : "normal",
          textDecorationLine: underline ? "underline" : "none",
          color,
        },
      ]}
      {...restProps}
    >
      {children}
    </RNText>
  );
}
