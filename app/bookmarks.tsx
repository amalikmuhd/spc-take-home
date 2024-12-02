import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { HStack } from "@/components/HStack";
import { Text } from "@/components/Text";
import Card from "@/components/Card";
import { VStack } from "@/components/VStack";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { Image } from "expo-image";
import { IMAGES } from "@/constants/Images";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { buttons } from "@/constants/Data";
import Screen from "@/components/Screen";
import ViewAnimation from "@/components/ViewAnimation";
import { useBookmarks } from "@/context/bookmark";

export default function HomeScreen() {
  const [level, setLevel] = useState(0);

  const { bookmarkedItems, toggleBookmark, isBookmarked } = useBookmarks();

  return (
    <Screen>
      <ViewAnimation delay={300}>
        <HStack justifyContent="space-between" alignItems="center" mb={20}>
          <TouchableOpacity onPress={() => router.back()} style={styles.button}>
            <Image source={IMAGES.arrowBack} style={{ width: 26, height: 26 }} />
          </TouchableOpacity>

          <Text fontFamily={"Outfit-Regular"} fontSize={18} color={Colors.black}>
            My BookMark
          </Text>
          <TouchableOpacity style={{ ...styles.button, ...styles.buttonMore }}>
            <Image source={IMAGES.more} style={{ width: 26, height: 26 }} />
          </TouchableOpacity>
        </HStack>
      </ViewAnimation>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewAnimation delay={350}>
          <VStack bg={"#FEFEFE"}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ViewAnimation delay={350}>
                <HStack gap={10} mt={18} mb={20}>
                  {buttons.map((title, index) => (
                    <CustomButton key={index} title={title} toggle={level === index} onPress={() => setLevel(index)} />
                  ))}
                </HStack>
              </ViewAnimation>
            </ScrollView>
            {bookmarkedItems.length === 0 ? (
              <ViewAnimation delay={400}>
                <Text textAlign="center" mt={40}>
                  No Data
                </Text>
              </ViewAnimation>
            ) : (
              bookmarkedItems.map((item) => (
                <Card
                  mt={10}
                  key={item.id}
                  name={item.name}
                  title={item.title}
                  amount={item.amount}
                  starRate={item.starRate}
                  reviews={item.reviews}
                  toggle={isBookmarked(item) ? true : false}
                  onPress={() => toggleBookmark(item)}
                />
              ))
            )}
          </VStack>
        </ViewAnimation>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: Colors.lightBlack,
  },
  buttonMore: {
    borderWidth: 1,
    borderColor: Colors.lightText,
    backgroundColor: Colors.bgWhite,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
