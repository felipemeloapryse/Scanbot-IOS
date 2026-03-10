import { DocumentDataExtractorConfiguration } from "react-native-scanbot-sdk";
import { startDocumentDataExtractor } from "react-native-scanbot-sdk/ui_v2";
import { parseScanbotFields } from "../../utils/scanbotParser";

export async function startGermanIdScannerService() {

  try {

    const configuration = new DocumentDataExtractorConfiguration();
    const result = await startDocumentDataExtractor(configuration);
    if (!result || result.status !== "OK") return null;

    const document = result.data?.document;
    if (!document) return null;

    const parsed = parseScanbotFields(document.fields);
    const formatDate = (date) => {
      if (!date) return null;

      const parts = date.split(".");
      if (parts.length !== 3) return date;

      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    };

    return {
      documentType: document.type?.name,
      idNumber: parsed.ID,
      series: parsed.Series,
      cardAccessNumber: parsed.CardAccessNumber,
      firstName: parsed.GivenNames,
      lastName: parsed.Surname,
      maidenName: parsed.MaidenName,
      birthDate: formatDate(parsed.BirthDate),
      expiryDate: formatDate(parsed.ExpiryDate),
      nationality: parsed.Nationality,
      birthplace: parsed.Birthplace
    };
  } catch (error) {
    console.error("German ID scanner error:", error);
    return null;
  }
}