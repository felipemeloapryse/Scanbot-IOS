import ScanbotSDK, {
  HealthInsuranceCardScannerConfiguration,
} from "react-native-scanbot-sdk";
import { parseScanbotFields } from "../../utils/scanbotParser";

function formatDate(date: string | null): string | null {
  if (!date) return null;

  const parts = date.split("/");
  if (parts.length !== 3) return date;

  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

export async function startEhicScannerService() {
  try {
    // NOTE: `startEHICScanner` requires a configuration argument in SDK
    // v7.1.1 (the original code called it with none, which doesn't
    // compile). `HealthInsuranceCardScannerConfiguration` is a plain
    // interface with all-optional fields, so `{}` gives the same
    // "use every default" behavior the original call intended.
    const result = await ScanbotSDK.UI.startEHICScanner(
      {} as HealthInsuranceCardScannerConfiguration
    );
    if (!result || result.status !== "OK") {
      console.log("Scanning canceled");
      return null;
    }

    const fields = result.data.fields || [];
    const parsed = parseScanbotFields(fields);

    return {
      firstName: parsed.GIVEN_NAME,
      lastName: parsed.SURNAME,
      birthDate: formatDate(parsed.DATE_OF_BIRTH),
      personalIdNumber: parsed.PERSONAL_IDENTIFICATION_NUMBER,
      cardNumber: parsed.CARD_NUMBER,
      expirationDate: formatDate(parsed.CARD_EXPIRATION_DATE),
      institutionName: parsed.INSTITUTION_NAME,
      institutionNumber: parsed.INSTITUTION_NUMBER,
      country: parsed.COUNTRY,
    };
  } catch (error) {
    console.error("EHIC scanner error:", error);
    return null;
  }
}
