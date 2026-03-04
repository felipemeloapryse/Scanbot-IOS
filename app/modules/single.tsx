import { useCallback } from "react";
import { Button, View } from "react-native";
import {
    BarcodeScannerScreenConfiguration,
    ScanbotBarcode,
} from "react-native-scanbot-barcode-scanner-sdk";

export default function SingleScanner() {
  const startSingleScanner = useCallback(async () => {
    try {
      // 1️⃣ Cria config padrão para single scanning
      const config = new BarcodeScannerScreenConfiguration();

      // 2️⃣ Start the scanner
      const result = await ScanbotBarcode.startScanner(config);

      // 3️⃣ Handle results
      if (result.status === "OK") {
        console.log("📦 Barcode scan result:", result.data?.items);
      } else {
        console.log("❌ Scanning canceled or no barcode detected");
      }
    } catch (error) {
      console.error("🚨 Error while scanning:", error);
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Button title="Start Single Barcode Scanner" onPress={startSingleScanner} />
    </View>
  );
}