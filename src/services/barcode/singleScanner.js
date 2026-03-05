import { BarcodeScannerScreenConfiguration, ScanbotBarcode, } from "react-native-scanbot-barcode-scanner-sdk";
export async function startSingleScanner() {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    const result = await ScanbotBarcode.startScanner(config);
    if (result.status === "OK") {
      console.log("Barcode scan result:", result.data?.items);
      return result.data?.items;
    } else {
      console.log("Scanning canceled");
      return null;
    }
  } catch (error) {
    console.error("Error while scanning:", error);
    throw error;
  }
}