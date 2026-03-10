import { BarcodeScannerScreenConfiguration, startBarcodeScanner } from "react-native-scanbot-sdk/ui_v2";

function parseAAMVABarcode(text) {

  const lines = text.split("\n");

  const getField = (code) => {
    const line = lines.find(l => l.startsWith(code));
    return line ? line.replace(code, "").trim() : null;
  };

  return {
    firstName: getField("DAC"),
    lastName: getField("DCS"),
    middleName: getField("DAD"),
    licenseNumber: getField("DAQ"),
    birthDate: getField("DBB"),
    expirationDate: getField("DBA"),
    address: getField("DAG"),
    city: getField("DAI"),
    state: getField("DAJ"),
    zip: getField("DAK"),
  };
}

export async function startUsDriverLicenseScannerService() {

  try {

    const configuration = new BarcodeScannerScreenConfiguration();

    configuration.scannerConfiguration.barcodeFormats = ["PDF_417"];

    const result = await startBarcodeScanner(configuration);

    if (result.status !== "OK") {
      console.log("Scanning canceled");
      return null;
    }

    const barcodeItem = result.data?.items?.[0];

    if (!barcodeItem) {
      console.log("No barcode detected");
      return null;
    }

    const barcodeText = barcodeItem.barcode?.text ?? null;

    console.log("US DRIVER LICENSE RAW BARCODE:");
    console.log(barcodeText);

    if (!barcodeText) return null;

    const parsedData = parseAAMVABarcode(barcodeText);

    console.log("PARSED DRIVER LICENSE:");
    console.log(parsedData);

    return parsedData;

  } catch (error) {
    console.error("US Driver License scanner error:", error);
    return null;
  }
}