import { startVINScanner, VinScannerScreenConfiguration, } from "react-native-scanbot-sdk/ui_v2";

export async function startVinScannerService() {

  try {
    const configuration = new VinScannerScreenConfiguration();
    const result = await startVINScanner(configuration);
    const vin = result.data?.textResult?.rawText ?? null;
    if (!vin) {
      console.log("No VIN detected");
      return null;
    }
    return {
      vinNumber: vin
    };
  } catch (error) {
    console.error("VIN scanner error:", error);
    return null;
  }
}