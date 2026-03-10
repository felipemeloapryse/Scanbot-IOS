import { CreditCardScannerScreenConfiguration, startCreditCardScanner, } from "react-native-scanbot-sdk/ui_v2";

import { parseScanbotFields } from "../../utils/scanbotParser";

export default async function startCreditCardScannerService() {

  try {

    const configuration = new CreditCardScannerScreenConfiguration();
    const result = await startCreditCardScanner(configuration);
    if (!result || result.status !== "OK") {
      console.log("Credit card scanning canceled");
      return null;
    }

    const creditCard = result.data?.creditCard;
    if (!creditCard?.fields) {
      console.log("No fields detected");
      return null;
    }

    const parsed = parseScanbotFields(creditCard.fields);
    const formatExpiry = (date) => {
      if (!date) return null;

      const parts = date.split("/");
      if (parts.length !== 2) return date;

      return `20${parts[1]}-${parts[0]}`;
    };

    const data = {
      cardNumber: parsed.CardNumber,
      cardholderName: parsed.CardholderName,
      expiryDate: formatExpiry(parsed.ExpiryDate)
    };

    console.log("CREDIT CARD PARSED:");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Credit card scanner error:", error);
    return null;
  }
}