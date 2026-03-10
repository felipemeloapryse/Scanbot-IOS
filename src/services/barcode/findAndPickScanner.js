import { BarcodeScannerScreenConfiguration, ExpectedBarcode, FindAndPickScanningMode, ScanbotBarcode, } from "react-native-scanbot-sdk/ui_v2";


export async function startFindAndPickScanner() {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.useCase = new FindAndPickScanningMode();

    config.useCase.sheet.mode = "COLLAPSED_SHEET";
    config.useCase.sheet.collapsedVisibleHeight = "LARGE";

    config.useCase.arOverlay.automaticSelectionEnabled = false;

    config.useCase.sheetContent.manualCountChangeEnabled = true;
    config.useCase.countingRepeatDelay = 1000;

    config.useCase.sheetContent.submitButton.text = "Submit";
    config.useCase.sheetContent.submitButton.foreground.color = "#000000";

    config.useCase.expectedBarcodes = [
      new ExpectedBarcode({
        barcodeValue: "123456",
        title: "numeric barcode",
        count: 4,
      }),
      new ExpectedBarcode({
        barcodeValue: "SCANBOT",
        title: "value barcode",
        count: 3,
      }),
    ];

    const result = await ScanbotBarcode.startScanner(config);
    return result;

  } catch (error) {
    console.error("Error in startFindAndPickScanner:", error);
    throw error;
  }
}