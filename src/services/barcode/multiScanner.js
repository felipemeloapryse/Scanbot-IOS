import { BarcodeScannerScreenConfiguration, MultipleScanningMode, startBarcodeScanner } from "react-native-scanbot-sdk/ui_v2";


export async function startScanAndCountScanner() {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.useCase = new MultipleScanningMode();
    const result = await startBarcodeScanner(config);
    return result;
  } catch (error) {
    console.error("Error in startScanAndCountScanner:", error);
    throw error;
  }
}