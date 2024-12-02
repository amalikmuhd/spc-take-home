import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
export default function Screen({ children }: PropsWithChildren) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, backgroundColor: "white", flex: 1 },
});
