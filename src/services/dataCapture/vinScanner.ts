import {
  startVINScanner,
  VinScannerScreenConfiguration,
} from "react-native-scanbot-sdk/ui_v2";

export async function startVinScannerService() {
  try {
    const configuration = new VinScannerScreenConfiguration();
    const result = await startVINScanner(configuration);

    // NOTE: same fix as dataScanner.ts - the original code read
    // `result.data?.textResult?.rawText` without narrowing on
    // `result.status === "OK"` first, which doesn't type-check against
    // the discriminated `ResultWrapper<T>` union.
    if (result.status !== "OK") {
      console.log("VIN scanning canceled");
      return null;
    }

    const vin = result.data.textResult?.rawText ?? null;
    if (!vin) {
      console.log("No VIN detected");
      return null;
    }
    return {
      vinNumber: vin,
    };
  } catch (error) {
    console.error("VIN scanner error:", error);
    return null;
  }
}
