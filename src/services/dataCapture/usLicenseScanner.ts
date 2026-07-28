import {
  BarcodeScannerScreenConfiguration,
  startBarcodeScanner,
} from "react-native-scanbot-sdk/ui_v2";

export type UsDriverLicenseData = {
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  licenseNumber: string | null;
  birthDate: string | null;
  expirationDate: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
};

function parseAAMVABarcode(text: string): UsDriverLicenseData {
  const lines = text.split("\n");
  const getField = (code: string): string | null => {
    const line = lines.find((l) => l.startsWith(code));
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

export async function startUsDriverLicenseScannerService(): Promise<UsDriverLicenseData | null> {
  try {
    const configuration = new BarcodeScannerScreenConfiguration();
    configuration.scannerConfiguration.barcodeFormats = ["PDF_417"];
    const result = await startBarcodeScanner(configuration);

    if (result.status !== "OK") {
      console.log("Scanning canceled");
      return null;
    }

    const barcodeItem = result.data.items?.[0];
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
