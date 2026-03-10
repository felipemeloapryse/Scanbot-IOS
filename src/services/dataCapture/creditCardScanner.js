import { CreditCardScannerScreenConfiguration, startCreditCardScanner, } from "react-native-scanbot-sdk/ui_v2";

export default async function startCreditCardScannerService() {
  try {

    const configuration = new CreditCardScannerScreenConfiguration();
    const result = await startCreditCardScanner(configuration);

    if (result.status !== "OK") {
      console.log("Credit card scanning canceled");
      return null;
    }

    const creditCard = result.data?.creditCard;
    console.log("CREDIT CARD RAW RESULT:");
    console.log(creditCard);

    if (!creditCard?.fields) {
      console.log("No fields detected");
      return null;
    }

    const data = {};
    creditCard.fields.forEach((field) => {
      const name = field.type?.name;
      const value = field.value?.text;

      if (name && value) {
        data[name] = value;
      }
    });
    console.log("CREDIT CARD PARSED:");
    console.log(data);
    console.log("Card Number:", data.CardNumber);
    console.log("Cardholder:", data.CardholderName);
    console.log("Expiry:", data.ExpiryDate);
    return data;

  } catch (e) {
    console.error("Credit card scanner error:", e);
    return null;
  }
}