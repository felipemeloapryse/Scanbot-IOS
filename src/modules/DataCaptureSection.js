import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ModuleCard from "../components/ModuleCard";
import { styles } from "../styles/homeStyles";

import { startEhicScannerService } from "../services/dataCapture/ehicScanner";
import { startGermanIdScannerService } from "../services/dataCapture/germanIdScanner";
import { startMrzScannerService } from "../services/dataCapture/mrzScanner";
import { startUsDriverLicenseScannerService } from "../services/dataCapture/usLicenseScanner";

import { startCheckScannerService } from "../services/dataCapture/checkScanner";
import startCreditCardScannerService from "../services/dataCapture/creditCardScanner";

import ScanResultModal from "../components/modals/ScanResultModal";

import { startTextPatternScannerService } from "../services/dataCapture/dataScanner";
import { startVinScannerService } from "../services/dataCapture/vinScanner";

export default function DataCapture() {

  const [modalVisible, setModalVisible] = useState(false);
  const [scanData, setScanData] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSection, setModalSection] = useState("");

  function openResult(title, section, data) {
    if (!data) return;
    setScanData(data);
    setModalTitle(title);
    setModalSection(section);
    setModalVisible(true);
  }

  async function handleDriverLicenseScan() {
    try {
      const data = await startUsDriverLicenseScannerService();
      openResult("Driver License Result", "Driver Information", data);
    } catch (error) {
      console.error("Driver license scan error:", error);
    }
  }

  async function handleMrzScan() {
    try {
      const data = await startMrzScannerService();
      openResult("MRZ Scanner Result", "Document Information", data);
    } catch (error) {
      console.error("MRZ scan error:", error);
    }
  }

  async function handleGermanIdScan() {
    try {
      const data = await startGermanIdScannerService();
      openResult("German ID Result", "Identity Information", data);
    } catch (error) {
      console.error("German ID scan error:", error);
    }
  }

  async function handleEhicScan() {
    try {
        const data = await startEhicScannerService();
        openResult("EHIC Scanner Result", "Health Card Information", data);
      } catch (error) {
        console.error("EHIC scan error:", error);
      }
    }

  async function handleCheckScan() {
    try {
      const data = await startCheckScannerService();
      openResult("Check Scanner Result", "Check Information", data);
    } catch (error) {
      console.error("Check scan error:", error);
    }
  }

  async function handleCreditCardScan() {
    try {
      const data = await startCreditCardScannerService();
      openResult("Credit Card Result", "Card Information", data);
    } catch (error) {
      console.error("Credit card scan error:", error);
    }
  }

  async function handleDataScanner() {
    try {
      const data = await startTextPatternScannerService();
      openResult("Data Scanner Result","Captured Text",data);
    } catch (error) {
      console.error("Data scanner error:", error);
    }
  }

  async function handleVinScan() {
    try {
      const data = await startVinScannerService();
      openResult( "VIN Scanner Result", "Vehicle Identification", data );
    } catch (error) {
      console.error("VIN scan error:", error);
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
        <ModuleCard title="MRZ Scanner" description="Scan Machine Readable Zones from passports and IDs" icon="scan-outline" onPress={handleMrzScan} />
        <ModuleCard title="US Driver's License Scanner" description="Scan US driver's licenses and extract structured data" icon="card-outline" onPress={handleDriverLicenseScan} />
        <ModuleCard title="German ID Scanner" description="Scan German identity cards and capture personal data" icon="person-outline" onPress={handleGermanIdScan} />
        <ModuleCard title="EHIC Scanner" description="Scan European Health Insurance Cards" icon="medkit-outline" onPress={handleEhicScan} />
        <Text style={{paddingBottom:20, paddingTop: 15, fontSize:16, color:'grey', fontWeight: 'bold' }} >Financial Documents</Text>
        <ModuleCard title="Check Scanner" description="Extract check data from the MICR code on the bottom of a check" icon="cash-outline" onPress={handleCheckScan} />
        <ModuleCard title="Credit Card Scanner" description="Extract details from the front side of Visa, MasterCard and AMEX cards" icon="card-outline" onPress={handleCreditCardScan} />
        <Text style={{paddingBottom:20, paddingTop: 15, fontSize:16, color:'grey', fontWeight: 'bold' }} >Single-Line OCR</Text>
        <ModuleCard title="Data Scanner" description="Capture single line data in an instant" icon="text-outline" onPress={handleDataScanner} />
        <ModuleCard title="VIN Scanner" description="Extract Vehicle Identification Numbers located behind the windshield or in the driver's door." icon="car-outline" onPress={handleVinScan} />
      </ScrollView>
      <ScanResultModal visible={modalVisible} data={scanData} title={modalTitle} sectionTitle={modalSection} onClose={() => setModalVisible(false)} />
    </View>
  );
}
