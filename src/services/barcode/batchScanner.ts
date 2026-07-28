import type { ResultWrapper } from "react-native-scanbot-sdk";
import {
  BarcodeScannerScreenConfiguration,
  BarcodeScannerUiResult,
  MultipleScanningMode,
  startBarcodeScanner,
} from "react-native-scanbot-sdk/ui_v2";

export async function startBatchScanner(): Promise<
  ResultWrapper<BarcodeScannerUiResult>
> {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.useCase = new MultipleScanningMode();
    const result = await startBarcodeScanner(config);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
