import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ModuleCard from "../components/ModuleCard";
import DriverLicenseResultModal from "../components/modals/DriverLicenseResultModal";
import { styles } from "../styles/homeStyles";

import { startEhicScannerService } from "../services/dataCapture/ehicScanner";
import { startGermanIdScannerService } from "../services/dataCapture/germanIdScanner";
import { startMrzScannerService } from "../services/dataCapture/mrzScanner";
import { startUsDriverLicenseScannerService } from "../services/dataCapture/usLicenseScanner";

import { startCheckScannerService } from "../services/dataCapture/checkScanner";
import startCreditCardScannerService from "../services/dataCapture/creditCardScanner";

import { startTextPatternScannerService } from "../services/dataCapture/dataScanner";
import { startVinScannerService } from "../services/dataCapture/vinScanner";

export default function DataCapture() {

  const [licenseModalVisible, setLicenseModalVisible] = useState(false);
  const [licenseData, setLicenseData] = useState(null);

  async function handleDriverLicenseScan() {
    try {
      const data = await startUsDriverLicenseScannerService();
      if (!data) return;
      setLicenseData(data);
      setLicenseModalVisible(true);
    } catch (error) {
      console.error("Driver license scan error:", error);
    }
  }

  return (
    <View>
      <View style={styles.cardsHeader}>
        <Text style={styles.title}>Data Capture SDK</Text>
        <Text style={styles.subtitle}>Extract structured data from identity documents</Text>
      </View>

      <ScrollView style={styles.cardsScroll} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false} >
        <Text style={{paddingBottom:20, fontSize:16, color:'grey', fontWeight: 'bold' }} >Identification Documents</Text>
        <ModuleCard title="MRZ Scanner" description="Scan Machine Readable Zones from passports and IDs" icon="scan-outline" onPress={startMrzScannerService} />
        <ModuleCard title="US Driver's License Scanner" description="Scan US driver's licenses and extract structured data" icon="card-outline" onPress={handleDriverLicenseScan} />
        <ModuleCard title="German ID Scanner" description="Scan German identity cards and capture personal data" icon="person-outline" onPress={startGermanIdScannerService} />
        <ModuleCard title="EHIC Scanner" description="Scan European Health Insurance Cards" icon="medkit-outline" onPress={startEhicScannerService} />
        <Text style={{paddingBottom:20, paddingTop: 15, fontSize:16, color:'grey', fontWeight: 'bold' }} >Financial Documents</Text>
        <ModuleCard title="Check Scanner" description="Extract check data from the MICR code on the bottom of a check" icon="cash-outline" onPress={startCheckScannerService} />
        <ModuleCard title="Credit Card Scanner" description="Extract details from the front side of Visa, MasterCard and AMEX cards" icon="card-outline" onPress={startCreditCardScannerService} />
        <Text style={{paddingBottom:20, paddingTop: 15, fontSize:16, color:'grey', fontWeight: 'bold' }} >Single-Line OCR</Text>
        <ModuleCard title="Data Scanner" description="Capture single line data in an instant" icon="text-outline" onPress={startTextPatternScannerService} />
        <ModuleCard title="VIN Scanner" description="Extract Vehicle Identification Numbers located behind the windshield or in the driver's door." icon="car-outline" onPress={startVinScannerService} />
      </ScrollView>
      <DriverLicenseResultModal visible={licenseModalVisible} data={licenseData} onClose={() => setLicenseModalVisible(false)} />
    </View>
  );
}
