import { Stack } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";
import ScanbotBarcodeSDK, { SdkConfiguration } from "react-native-scanbot-barcode-scanner-sdk";
import { SCANBOT_LICENSE } from "@/src/config/scanbot";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    ScanbotBarcodeSDK
      .initialize(new SdkConfiguration({ licenseKey: SCANBOT_LICENSE }))
      .then(result => console.log("✅ SDK inicializado:", result))
      .catch(err => console.log("❌ Erro:", err));
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
  