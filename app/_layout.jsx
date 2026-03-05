import { Stack } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ScanbotBarcodeSDK from "react-native-scanbot-barcode-scanner-sdk";

import { SCANBOT_LICENSE } from "../src/config/scanbot";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    ScanbotBarcodeSDK
      .initialize({ licenseKey: SCANBOT_LICENSE })
      .then(result => console.log("SDK Initialized:", result))
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: "#FFFFFF", paddingTop: insets.top - 40, }} >
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
