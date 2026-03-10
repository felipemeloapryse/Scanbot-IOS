import ScanbotSDK from "react-native-scanbot-sdk";
import { parseScanbotFields } from "../../utils/scanbotParser";

export async function startEhicScannerService() {

  try {

    const result = await ScanbotSDK.UI.startEHICScanner();
    if (!result || result.status !== "OK") {
      console.log("Scanning canceled");
      return null;
    }

    const fields = result.data?.fields || [];
    const parsed = parseScanbotFields(fields);
    const formatDate = (date) => {
      if (!date) return null;

      const parts = date.split("/");
      if (parts.length !== 3) return date;

      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    };

    return {
      firstName: parsed.GIVEN_NAME,
      lastName: parsed.SURNAME,
      birthDate: formatDate(parsed.DATE_OF_BIRTH),
      personalIdNumber: parsed.PERSONAL_IDENTIFICATION_NUMBER,
      cardNumber: parsed.CARD_NUMBER,
      expirationDate: formatDate(parsed.CARD_EXPIRATION_DATE),
      institutionName: parsed.INSTITUTION_NAME,
      institutionNumber: parsed.INSTITUTION_NUMBER,
      country: parsed.COUNTRY
    };
  } catch (error) {
    console.error("EHIC scanner error:", error);
    return null;
  }
}