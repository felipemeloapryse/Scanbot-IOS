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

      // NOTE: `PdfConfiguration` has no `textLayerEnabled` field in SDK
      // v7.1.1 - passing an `ocrConfiguration` is what makes `createPDF`
      // embed a searchable text layer, so the (non-existent) flag below
      // was simply dropped; the default `PdfConfiguration` is used.
      pdfConfiguration: new PdfConfiguration(),

      // NOTE: the original code also passed `languages: ["en", "pt"]`
      // alongside `engineMode: "SCANBOT_OCR"`, but `OCRScanbotEngineConfiguration`
      // only accepts `engineMode` - it has no `languages` field (only the
      // `TESSERACT` engine takes a `languages` array). Kept `SCANBOT_OCR`
      // as-is here; switch to `{ engineMode: "TESSERACT", languages: ["en",
      // "pt"] }` instead if you specifically need configurable OCR
      // languages.
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

    // NOTE: `FileSystem.documentDirectory` is typed as `string | null` -
    // it's only null in environments without a document directory (e.g.
    // web), which doesn't apply to this native iOS app, but TS still
    // requires the check.
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
