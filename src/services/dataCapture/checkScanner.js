import {
  CheckScannerScreenConfiguration,
  startCheckScanner,
} from "react-native-scanbot-sdk/ui_v2";

import { parseScanbotFields } from "../../utils/scanbotParser";

export async function startCheckScannerService() {
  try {

    const configuration = new CheckScannerScreenConfiguration();
    const result = await startCheckScanner(configuration);

    if (!result || result.status !== "OK") {
      console.log("Check scanning canceled");
      return null;
    }

    const document = result.data?.check;
    if (!document) return null;

    const parsed = parseScanbotFields(document.fields);

    return {
      documentType: document.type?.name,
      ...parsed
    };

  } catch (error) {

    console.error("Check scanner error:", error);
    return null;

  }
}