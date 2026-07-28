import type { PageData } from "react-native-scanbot-sdk";
import {
  DocumentScanningFlow,
  startDocumentScanner,
} from "react-native-scanbot-sdk/ui_v2";

// NOTE: the original code passed a plain `{ multiPageEnabled: true,
// autoCaptureEnabled: true }` object to `startDocumentScanner` from
// `ui_v2`. Those two keys don't exist anywhere on `DocumentScanningFlow` -
// `multiPageEnabled` belonged to the deprecated v1
// `DocumentScannerScreenConfiguration`, and `autoCaptureEnabled` never
// existed at all in either API (the real v1 name is `autoSnappingEnabled`).
// In `ui_v2`, multi-page scanning is inherent to the flow (no toggle
// needed), and auto-capture is `screens.camera.cameraConfiguration
// .autoSnappingEnabled`, which already defaults to `true`. Set explicitly
// below to preserve the original intent.
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
