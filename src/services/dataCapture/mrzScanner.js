import { MrzScannerScreenConfiguration, startMRZScanner } from "react-native-scanbot-sdk/ui_v2";
import { parseScanbotFields } from "../../utils/scanbotParser";

export async function startMrzScannerService() {
  try {

    const configuration = new MrzScannerScreenConfiguration();
    const result = await startMRZScanner(configuration);
    if (!result || result.status !== "OK") return null;

    const document = result.data?.mrzDocument;
    if (!document) return null;

    const parsed = parseScanbotFields(document.fields);
    return {
      documentType: parsed.DocumentType,
      documentNumber: parsed.DocumentNumber,
      firstName: parsed.GivenNames,
      lastName: parsed.Surname,
      nationality: parsed.Nationality,
      birthDate: parsed.BirthDate
        ? `19${parsed.BirthDate.slice(0,2)}-${parsed.BirthDate.slice(2,4)}-${parsed.BirthDate.slice(4,6)}`
        : null,
      expiryDate: parsed.ExpiryDate
        ? `20${parsed.ExpiryDate.slice(0,2)}-${parsed.ExpiryDate.slice(2,4)}-${parsed.ExpiryDate.slice(4,6)}`
        : null,
      rawMRZ: result.data?.rawMRZ
    };
  } catch (error) {
    console.error("MRZ scanner error:", error);
    return null;
  }
}