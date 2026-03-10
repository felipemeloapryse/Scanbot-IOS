import { BarcodeScannerScreenConfiguration, startBarcodeScanner, } from "react-native-scanbot-sdk/ui_v2";

export async function startSingleScanner() {
  try {
    const configuration = new BarcodeScannerScreenConfiguration();

    const result = await startBarcodeScanner(configuration);

    if (result.status === "OK") {
      const barcode = result.data?.items?.[0] || null;
      console.log("Barcode scan result:", barcode);
      return barcode;
    }

    console.log("Scanning canceled");
    return null;

  } catch (error) {
    console.error("Error while scanning:", error);
    throw error;
  }
}