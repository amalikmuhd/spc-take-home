import { StyleSheet, View, ScrollView } from "react-native";
import TabNavigationHeader from "@/components/TabNavigationHeader";
import { HStack } from "@/components/HStack";
import SearchInput from "@/components/SearchInput";
import AddressInput from "@/components/AddressInput";
import CurrentLocation from "@/components/CurrentLocation";
import AdsCard from "@/components/AdsCard";
import IconButton from "@/components/IconButton";
import { categoriesOne, categoriesTwo, dummyData, buttons } from "@/constants/Data";
import Card from "@/components/Card";
import { VStack } from "@/components/VStack";
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Item } from "@/types";
import Label from "@/components/Label";
import Screen from "@/components/Screen";
import ViewAnimation from "@/components/ViewAnimation";
import { useBookmarks } from "@/context/bookmark";

export default function HomeScreen() {
  const [level, setLevel] = useState(0);
  const { toggleBookmark, isBookmarked } = useBookmarks();

  return (
    <Screen>
      <ViewAnimation delay={300}>
        <TabNavigationHeader />
      </ViewAnimation>
      <ViewAnimation delay={350}>
        <SearchInput />
      </ViewAnimation>
      <ViewAnimation delay={400}>
        <HStack mt={10} gap={12}>
          <AddressInput />
          <CurrentLocation />
        </HStack>
      </ViewAnimation>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewAnimation delay={450}>
          <Label leftTitle="  Special Offers" rightTitle="See All" />
        </ViewAnimation>
        <ViewAnimation>
          <AdsCard />
        </ViewAnimation>
        <ViewAnimation delay={500}>
          <Label leftTitle="Categories" rightTitle="See All" />
        </ViewAnimation>

        <ViewAnimation delay={550}>
          <View style={{ ...styles.grid, marginTop: 18 }}>
            {categoriesOne.map((item, index) => (
              <IconButton key={index} source={item.iconName} label={item.label} />
            ))}
          </View>
        </ViewAnimation>
        <ViewAnimation delay={600}>
          <View style={{ ...styles.grid, marginTop: 24 }}>
            {categoriesTwo.map((item, index) => (
              <IconButton key={index} source={item.iconName} label={item.label} />
            ))}
          </View>
        </ViewAnimation>

        <ViewAnimation delay={650}>
          <Label leftTitle="Recommended services" rightTitle="See All" mb={10} />
          <VStack bg={"#FEFEFE"}>
            {dummyData.map((item, index) => (
              <Card
                mt={10}
                key={index}
                name={item.name}
                title={item.title}
                amount={item.amount}
                starRate={item.starRate}
                reviews={item.reviews}
                toggle={isBookmarked(item) ? true : false}
                onPress={() => toggleBookmark(item)}
              />
            ))}
          </VStack>
        </ViewAnimation>

        <ViewAnimation delay={700}>
          <Label leftTitle="Discover & Explore Services" rightTitle="See All" />
          <VStack bg={"#FEFEFE"}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack gap={10} mt={18} mb={20}>
                {buttons.map((title, index) => (
                  <CustomButton key={index} title={title} toggle={level === index} onPress={() => setLevel(index)} />
                ))}
              </HStack>
            </ScrollView>
            {dummyData.map((item, index) => (
              <Card
                mt={10}
                key={index}
                name={item.name}
                title={item.title}
                amount={item.amount}
                starRate={item.starRate}
                reviews={item.reviews}
                toggle={isBookmarked(item) ? true : false}
                onPress={() => toggleBookmark(item)}
              />
            ))}
          </VStack>
        </ViewAnimation>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
