import ScanbotSDK from "react-native-scanbot-sdk";

export async function startEhicScannerService() {

  try {

    const result = await ScanbotSDK.UI.startEHICScanner();

    if (result.status !== "OK") {
      console.log("Scanning canceled");
      return null;
    }

    const card = result.data;

    console.log("EHIC RESULT:");
    console.log(card);

    return card;

  } catch (error) {

    console.error("EHIC scanner error:", error);
    return null;

  }
}