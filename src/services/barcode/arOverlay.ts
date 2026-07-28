import type { ResultWrapper } from "react-native-scanbot-sdk";
import {
  BarcodeScannerScreenConfiguration,
  BarcodeScannerUiResult,
  MultipleScanningMode,
  startBarcodeScanner,
} from "react-native-scanbot-sdk/ui_v2";

export async function startArOverlayScanner(): Promise<
  ResultWrapper<BarcodeScannerUiResult>
> {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.useCase = new MultipleScanningMode();
    config.useCase.arOverlay.visible = true;
    config.useCase.arOverlay.automaticSelectionEnabled = false;
    config.useCase.arOverlay.barcodeItemInfoPosition = "STACKED";
    config.useCase.arOverlay.polygon.visible = true;

    // NOTE: the original code set `arOverlay.textColor` and
    // `arOverlay.polygonColor`, but those flat properties don't exist on
    // `ArOverlayGeneralConfiguration` in SDK v7.1.1 - they were silently
    // ignored at runtime. The real (nested) equivalents are below.
    config.useCase.arOverlay.polygon.selected.strokeColor = "#00FF00";
    config.useCase.arOverlay.polygon.deselected.strokeColor = "#00FF00";
    config.useCase.arOverlay.barcodeItemConfiguration.titleSelected.color =
      "#FFFFFF";
    config.useCase.arOverlay.barcodeItemConfiguration.subtitleSelected.color =
      "#FFFFFF";

    const result = await startBarcodeScanner(config);
    return result;
  } catch (error) {
    console.error("Error in startArOverlayScanner: ", error);
    throw error;
  }
}
