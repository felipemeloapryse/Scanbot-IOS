import * as FileSystem from "expo-file-system/legacy";
import { Alert } from "react-native";
import FileViewer from "react-native-file-viewer";
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

    // OCR
    const ocrResult = await ScanbotSDK.performOCR({
      imageFileUris,
      languages: ["en", "pt"],
    });

    const ocrText = ocrResult.plainText;

    console.log("OCR TEXT:", ocrText);

    // PDF
    const pdfResult = await ScanbotSDK.createPDF({
      imageFileUris,
      pdfConfiguration: {
        textLayerEnabled: true,
      },
    });

    const pdfUri = pdfResult.pdfFileUri;

    console.log("PDF generated:", pdfUri);

    if (!pdfUri) return null;

    const newPath =
      FileSystem.documentDirectory +
      `scan_${Date.now()}.pdf`;

    await FileSystem.copyAsync({
      from: pdfUri,
      to: newPath,
    });

    console.log("PDF copied to:", newPath);

    // abre viewer
    await FileViewer.open(newPath.replace("file://", ""));

    // 🔥 depois que fechar o viewer mostramos o OCR
    Alert.alert(
      "OCR Result",
      ocrText,
      [{ text: "OK" }],
      { cancelable: true }
    );

    return {
      pdfPath: newPath,
      ocrText,
    };

  } catch (error) {
    console.error("Document OCR error:", error);
    return null;
  }
}