import type { PageData } from "react-native-scanbot-sdk";
import {
  DocumentScanningFlow,
  startDocumentScanner,
} from "react-native-scanbot-sdk/ui_v2";


function buildDocumentScanningFlow(): DocumentScanningFlow {
  return new DocumentScanningFlow({
    screens: {
      camera: {
        cameraConfiguration: {
          autoSnappingEnabled: true,
        },
      },
    },
  });
}

export async function startDocumentScannerService(): Promise<
  PageData[] | null
> {
  try {
    const config = buildDocumentScanningFlow();
    const result = await startDocumentScanner(config);

    if (result.status === "OK") {
      console.log("Document pages:", result.data.pages);
      return result.data.pages;
    }

    console.log("Scanning canceled");
    return null;
  } catch (error) {
    console.error("Document scanner error:", error);
    throw error;
  }
}

export { buildDocumentScanningFlow };
