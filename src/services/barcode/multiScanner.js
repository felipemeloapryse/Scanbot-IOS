import { BarcodeScannerScreenConfiguration, MultipleScanningMode, ScanbotBarcode } from "react-native-scanbot-barcode-scanner-sdk";


export async function startScanAndCountScanner() {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.useCase = new MultipleScanningMode();
    const result = await ScanbotBarcode.startScanner(config);
    return result;
  } catch (error) {
    console.error("Error in startScanAndCountScanner:", error);
    throw error;
  }
}