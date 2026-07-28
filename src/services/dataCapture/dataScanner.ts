import {
  startTextPatternScanner,
  TextPatternScannerScreenConfiguration,
} from "react-native-scanbot-sdk/ui_v2";

export async function startTextPatternScannerService() {
  try {
    const configuration = new TextPatternScannerScreenConfiguration();
    const result = await startTextPatternScanner(configuration);

    // NOTE: the original code read `result.data?.rawText` without checking
    // `result.status` first. `ResultWrapper<T>` is `{status:'CANCELED'} |
    // {status:'OK', data:T}`, so `.data` only exists after narrowing on
    // `status === 'OK'` - added below (this was a real TS error, not just
    // a style nit: without the guard `result.data` doesn't type-check).
    if (result.status !== "OK") {
      console.log("Text pattern scanning canceled");
      return null;
    }

    const text = result.data.rawText;
    if (!text) return null;
    return {
      scannedText: text,
    };
  } catch (error) {
    console.error("Text pattern scanner error:", error);
    return null;
  }
}
