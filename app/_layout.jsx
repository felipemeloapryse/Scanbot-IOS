import { Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { initializeScanbot } from "../src/services/scanbot/initializeScanbot";

export default function RootLayout() {

  const insets = useSafeAreaInsets();

  useEffect(() => {
    initializeScanbot();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: insets.top - 40,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}