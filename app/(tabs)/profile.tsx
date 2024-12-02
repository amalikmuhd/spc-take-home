import Screen from "@/components/Screen";
import ViewAnimation from "@/components/ViewAnimation";
import { Text } from "@/components/Text";

export default function Profile() {
  return (
    <Screen>
      <ViewAnimation delay={300}>
        <Text mt={40} fontSize={38} fontFamily="OutfitMedium">
          Profile
        </Text>
      </ViewAnimation>
    </Screen>
  );
}
