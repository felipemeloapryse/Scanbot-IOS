import { BarcodeScannerScreenConfiguration, MultipleScanningMode, ScanbotBarcode } from "react-native-scanbot-barcode-scanner-sdk";

export async function startArOverlayScanner() {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.useCase = new MultipleScanningMode();
    config.useCase.arOverlay.visible = true;
    config.useCase.arOverlay.automaticSelectionEnabled = false;
    config.useCase.arOverlay.barcodeItemInfoPosition = "STACKED";
    config.useCase.arOverlay.polygon.visible = true;
    config.useCase.arOverlay.textColor = "#FFFFFF";
    config.useCase.arOverlay.polygonColor = "#00FF00";
    const result = await ScanbotBarcode.startScanner(config);
    return result;
  } catch (error) {
    console.error("Error in startArOverlayScanner: ", error);
    throw error;
  }
}