import { startTextPatternScanner, TextPatternScannerScreenConfiguration, } from "react-native-scanbot-sdk/ui_v2";

export async function startTextPatternScannerService() {

  try {
    const configuration = new TextPatternScannerScreenConfiguration();
    const result = await startTextPatternScanner(configuration);
    const text = result.data?.rawText ?? null;
    if (!text) return null;
    return {
      scannedText: text
    };
  } catch (error) {
    console.error("Text pattern scanner error:", error);
    return null;
  }
}