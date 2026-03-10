import {
    startVINScanner,
    VinScannerScreenConfiguration,
} from 'react-native-scanbot-sdk/ui_v2';

export async function startVinScannerService() {
  try {
    /** Create an instance of the default configuration */
    const configuration = new VinScannerScreenConfiguration();
    /** Start the VIN Scanner UI */
    const vinScannerResult = await startVINScanner(configuration);
    /** Handle the result if the status is 'OK' */
    if (vinScannerResult.status === 'OK') {
    }
  } catch (e) {
    console.error(e.message);
  }
}