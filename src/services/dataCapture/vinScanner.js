import { startVINScanner, VinScannerScreenConfiguration, } from 'react-native-scanbot-sdk/ui_v2';

export async function startVinScannerService() {
  try {

    const configuration = new VinScannerScreenConfiguration();

    const vinScannerResult = await startVINScanner(configuration);

    if (vinScannerResult.status === 'OK') {
    }
  } catch (e) {
    console.error(e.message);
  }
}