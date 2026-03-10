import ScanbotSDK from "react-native-scanbot-sdk";
import { SCANBOT_LICENSE } from "../../config/scanbot";

let initialized = false;

export async function initializeScanbot() {
  try {

    if (initialized) return;

    const result = await ScanbotSDK.initializeSDK({
      licenseKey: SCANBOT_LICENSE,
    });

    console.log("Scanbot SDK initialized:", result);

    initialized = true;

  } catch (error) {
    console.error("Scanbot SDK initialization error:", error);
  }
}