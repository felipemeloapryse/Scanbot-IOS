import * as FileSystem from "expo-file-system/legacy";
import ScanbotSDK from "react-native-scanbot-sdk";
import { startDocumentScanner } from "react-native-scanbot-sdk/ui_v2";

export async function startDocumentOcrService() {
  try {

    const result = await startDocumentScanner({
      multiPageEnabled: true,
      autoCaptureEnabled: true,
    });

    if (result.status !== "OK") return null;
    const pages = result.data?.pages ?? [];
    const imageFileUris = pages
      .map((p) => p.documentImageURI)
      .filter(Boolean);

    if (imageFileUris.length === 0) return null;

    console.log("Creating OCR PDF...");

    const pdfResult = await ScanbotSDK.createPDF({
      imageFileUris,

      pdfConfiguration: {
        textLayerEnabled: true,
      },

      ocrConfiguration: {
        languages: ["en", "pt"],
        engineMode: "SCANBOT_OCR", 
      },
    });

    const pdfUri = pdfResult?.pdfFileUri;

    if (!pdfUri) {
      console.log("PDF generation failed");
      return null;
    }
    console.log("Searchable PDF generated:", pdfUri);
    const newPath =
      FileSystem.documentDirectory +
      `scan_${Date.now()}.pdf`;

    await FileSystem.copyAsync({
      from: pdfUri,
      to: newPath,
    });
    console.log("PDF copied to:", newPath);
    return {
      pdfPath: newPath,
    };

  } catch (error) {
    console.error("Document OCR error:", error);
    return null;
  }
}