import * as FileSystem from "expo-file-system/legacy";
import ScanbotSDK, { PdfConfiguration } from "react-native-scanbot-sdk";
import { startDocumentScanner } from "react-native-scanbot-sdk/ui_v2";

import { buildDocumentScanningFlow } from "./documentScanner";

export type DocumentOcrResult = {
  pdfPath: string;
};

export async function startDocumentOcrService(): Promise<DocumentOcrResult | null> {
  try {
    const config = buildDocumentScanningFlow();
    const result = await startDocumentScanner(config);

    if (result.status !== "OK") return null;
    const pages = result.data.pages ?? [];
    const imageFileUris = pages
      .map((p) => p.documentImageURI)
      .filter((uri): uri is string => Boolean(uri));

    if (imageFileUris.length === 0) return null;

    console.log("Creating OCR PDF...");

    const pdfResult = await ScanbotSDK.createPDF({
      imageFileUris,

      pdfConfiguration: new PdfConfiguration(),
      ocrConfiguration: {
        engineMode: "SCANBOT_OCR",
      },
    });

    const pdfUri = pdfResult?.pdfFileUri;

    if (!pdfUri) {
      console.log("PDF generation failed");
      return null;
    }
    console.log("Searchable PDF generated:", pdfUri);

    
    if (!FileSystem.documentDirectory) {
      console.log("No document directory available");
      return null;
    }

    const newPath = FileSystem.documentDirectory + `scan_${Date.now()}.pdf`;

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
