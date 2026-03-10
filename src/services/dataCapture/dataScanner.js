import { startTextPatternScanner, TextPatternScannerScreenConfiguration, } from "react-native-scanbot-sdk/ui_v2";

export async function startTextPatternScannerService() {
  try {

    const configuration = new TextPatternScannerScreenConfiguration();
    const result = await startTextPatternScanner(configuration);

    if (result.status !== "OK") {
      console.log("Text pattern scanning canceled");
      return null;
    }

    const text = result.data?.rawText ?? null;
    console.log("TEXT PATTERN SCANNER RESULT:");
    console.log(text);
    return text;
  } catch (error) {
    console.error("Text pattern scanner error:", error);
    return null;
  }
}