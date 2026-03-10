import { BarcodeScannerScreenConfiguration, startBarcodeScanner } from "react-native-scanbot-sdk/ui_v2";

export async function startSingleScanner() {
  try {
    const configuration = new BarcodeScannerScreenConfiguration();
    const result = await startBarcodeScanner(configuration);
    
    if (result.status === "OK") {
      const barcodeItem = result.data?.items?.[0];
      
      if (!barcodeItem) return null;
      const text = barcodeItem.barcode?.text ?? null;
      console.log("Barcode scan result:", text);
      return text;
    }
    console.log("Scanning canceled");
    return null;
  } catch (error) {
    console.error("Error while scanning:", error);
    return null;
  }
}