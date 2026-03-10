import { MrzScannerScreenConfiguration, startMRZScanner } from 'react-native-scanbot-sdk/ui_v2';

export async function startMrzScannerService() {
  try {
    
    const configuration = new MrzScannerScreenConfiguration();
    const mrzScannerResult = await startMRZScanner(configuration);

     if (mrzScannerResult.status === 'OK') return;

    console.log("MRZ RESULT:", result.data);
  } catch (error) {
    console.error("MRZ scanner error:", error);
  }
}