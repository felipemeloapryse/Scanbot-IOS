import ScanbotSDK from "react-native-scanbot-sdk";
import { startDocumentScanner } from "react-native-scanbot-sdk/ui_v2";

export async function startGermanIdScannerService() {

  try {

    const result = await startDocumentScanner({
      multiPageEnabled: false,
      autoCaptureEnabled: true,
    });

    if (result.status !== "OK") return null;

    const pages = result.data?.pages ?? [];

    const imageUris = pages
      .map(p => p.documentImageURI)
      .filter(Boolean);

    if (imageUris.length === 0) return null;

    const extraction = await ScanbotSDK.extractDocumentData({
      imageFileUris: imageUris,
    });

    console.log("GERMAN ID RESULT:");
    console.log(extraction);

    return extraction;

  } catch (error) {

    console.error("German ID scanner error:", error);
    return null;

  }
}