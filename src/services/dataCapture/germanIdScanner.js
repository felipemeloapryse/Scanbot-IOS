import {
  DocumentDataExtractorConfiguration,
} from "react-native-scanbot-sdk";

import { startDocumentDataExtractor } from "react-native-scanbot-sdk/ui_v2";


export async function startGermanIdScannerService() {

  try {

    const configuration = new DocumentDataExtractorConfiguration();

    const result = await startDocumentDataExtractor(configuration);

    if (result.status === "OK") {

      console.log("GERMAN ID RESULT:");
      console.log(result.data);

      return result.data;
    }

    return null;

  } catch (error) {

    console.error("German ID scanner error:", error);
    return null;

  }

}