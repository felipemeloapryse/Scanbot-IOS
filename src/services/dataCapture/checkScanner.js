import {
    CheckScannerScreenConfiguration,
    startCheckScanner,
} from "react-native-scanbot-sdk/ui_v2";

export async function startCheckScannerService() {
  try {

    const configuration = new CheckScannerScreenConfiguration();

    const result = await startCheckScanner(configuration);

    if (result.status !== "OK") {
      console.log("Check scanning canceled");
      return null;
    }

    const check = result.data ?? null;

    console.log("CHECK SCANNER RESULT:");
    console.log(check);

    return check;

  } catch (error) {

    console.error("Check scanner error:", error);
    return null;

  }
}