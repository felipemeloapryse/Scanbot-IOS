import { BarcodeScannerScreenConfiguration, ExpectedBarcode, FindAndPickScanningMode, startBarcodeScanner } from "react-native-scanbot-sdk/ui_v2";

export async function startFindAndPickScanner() {
  try {
    const config = new BarcodeScannerScreenConfiguration();
    config.scannerConfiguration.barcodeFormats = ["EAN_13"];
    const mode = new FindAndPickScanningMode();
    mode.arOverlay.automaticSelectionEnabled = false;
    mode.arOverlay.visible = true;
    mode.arOverlay.barcodeItemInfoPosition = "STACKED";
    mode.arOverlay.polygon.visible = true;
    mode.arOverlay.polygonColor = "#00C853";
    mode.arOverlay.textColor = "#FFFFFF";
    mode.expectedBarcodes = [

      new ExpectedBarcode({
        barcodeValue: "3619876543213",
        title: "Cream Soap",
        subtitle: "Moisture Hand Soap",
        count: 1,
        image: "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/creamSoap.png"
      }),

      new ExpectedBarcode({
        barcodeValue: "3618888888886",
        title: "Hair Spray",
        subtitle: "Extra Hold",
        count: 1,
        image: "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/hairSpray.png"
      }),

      new ExpectedBarcode({
        barcodeValue: "3614272859104",
        title: "Shaving Gel",
        subtitle: "Sensitive",
        count: 1,
        image: "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/shavingGel.png"
      }),

      new ExpectedBarcode({
        barcodeValue: "3611112223330",
        title: "Deodorant",
        subtitle: "48h Fresh",
        count: 1,
  
        image: "https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/deodorant.png"
      }),

      new ExpectedBarcode({
        barcodeValue: "3611234567893",
        title: "Hair Shampoo",
        subtitle: "For Normal Hair",
        count: 1,
        image: 'https://raw.githubusercontent.com/felipemeloapryse/Scanbot-IOS/main/src/assets/images/shampoo.png'
      })
    ];
    config.useCase = mode;
    const result = await startBarcodeScanner(config);
    return result;
  } catch (error) {
    console.error("Find & Pick scanner error:", error);
  }
}