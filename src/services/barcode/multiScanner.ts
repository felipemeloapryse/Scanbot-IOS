import type { ResultWrapper } from "react-native-scanbot-sdk";
import {
  BarcodeScannerScreenConfiguration,
  BarcodeScannerUiResult,
  ExpectedBarcode,
  FindAndPickScanningMode,
  startBarcodeScanner,
} from "react-native-scanbot-sdk/ui_v2";

export async function startFindAndPickScanner(): Promise<
  ResultWrapper<BarcodeScannerUiResult> | undefined
> {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.scannerConfiguration.barcodeFormats = ["EAN_13"];
    const mode = new FindAndPickScanningMode();
    mode.arOverlay.automaticSelectionEnabled = false;
    mode.arOverlay.visible = true;
    mode.arOverlay.polygon.visible = true;

    // NOTE: same fix as arOverlay.ts - `mode.arOverlay.polygonColor` and
    // `.textColor` don't exist on `ArOverlayFindAndPickConfiguration`.
    // The find-and-pick overlay's polygon colors are driven by scan status
    // (partiallyScanned / rejected / completed), so we set the "completed"
    // state color, which is the closest equivalent to the original intent.
    mode.arOverlay.polygon.completed.strokeColor = "#00C853";

    // NOTE: the original code also passed a `subtitle` to every
    // ExpectedBarcode below, but `ExpectedBarcode` in SDK v7.1.1 only has
    // `barcodeValue`, `title`, `image` and `count` - `subtitle` isn't part
    // of the class, so those values were silently discarded at runtime.
    mode.expectedBarcodes = [
      new ExpectedBarcode({
        barcodeValue: "3619876543213",
        title: "Cream Soap",
        count: 1,
        image:
          "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/creamSoap.png",
      }),

      new ExpectedBarcode({
        barcodeValue: "3618888888886",
        title: "Hair Spray",
        count: 1,
        image:
          "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/hairSpray.png",
      }),

      new ExpectedBarcode({
        barcodeValue: "3614272859104",
        title: "Shaving Gel",
        count: 1,
        image:
          "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/shavingGel.png",
      }),

      new ExpectedBarcode({
        barcodeValue: "3611112223330",
        title: "Deodorant",
        count: 1,
        image:
          "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/deodorant.png",
      }),

      new ExpectedBarcode({
        barcodeValue: "3611234567893",
        title: "Hair Shampoo",
        count: 1,
        image:
          "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/shampoo.png",
      }),
    ];
    config.useCase = mode;
    const result = await startBarcodeScanner(config);
    return result;
  } catch (error) {
    console.error("Find & Pick scanner error:", error);
    return undefined;
  }
}
