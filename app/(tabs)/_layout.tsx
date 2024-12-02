import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

// import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import { IMAGES } from "@/constants/Images";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#545454",
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarIcon: ({ color }) => <Image source={IMAGES.home} style={{ width: 26, height: 26 }} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: "Bookings",
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarIcon: ({ color }) => <Image source={IMAGES.bookings} style={{ width: 26, height: 26 }} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarIcon: ({ color }) => <Image source={IMAGES.messages} style={{ width: 26, height: 26 }} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarIcon: ({ color }) => <Image source={IMAGES.profile} style={{ width: 26, height: 26 }} />,
        }}
      />
    </Tabs>
  );
}
