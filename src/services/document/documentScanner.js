import { startDocumentScanner } from "react-native-scanbot-sdk/ui_v2";

export async function startDocumentScannerService() {
  try {

    const config = {
      multiPageEnabled: true,
      autoCaptureEnabled: true,
    };

    const result = await startDocumentScanner(config);

    if (result.status === "OK") {
      console.log("Document pages:", result.data?.pages);
      return result.data?.pages;
    }

    console.log("Scanning canceled");
    return null;

  } catch (error) {
    console.error("Document scanner error:", error);
    throw error;
  }
}