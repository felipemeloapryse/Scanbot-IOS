import { ScrollView, Text, View } from "react-native";
import ModuleCard from "../components/ModuleCard";
import { startArOverlayScanner } from "../services/barcode/arOverlay";
import { startBatchScanner } from "../services/barcode/batchScanner";
import { startFindAndPickScanner } from "../services/barcode/multiScanner";
import { startSingleScanner } from "../services/barcode/singleScanner";
import { styles } from "../styles/homeStyles";

export default function BarcodeScanner({ onScanFinished }) {
  async function handleSingleScan() {

    const result = await startSingleScanner();
    if (!result) return;
    onScanFinished([result]); 
  }

  return (
    <View style={{ }}>
      <View style={styles.cardsHeader}>
        <Text style={styles.title}>Barcode Scanner SDK</Text>
        <Text style={styles.subtitle}>Explore scanning modes and integration examples</Text>
      </View>
      <ScrollView style={styles.cardsScroll} contentContainerStyle={{ paddingBottom: 25}} showsVerticalScrollIndicator={false} >
        <ModuleCard title="Single Scanner" description="Fast scanning of individual barcodes" icon="barcode-outline" onPress={handleSingleScan} />
        <ModuleCard title="Batch Scanner" description="Capture multiple barcodes in one session" icon="albums-outline" onPress={startBatchScanner} />
        <ModuleCard title="Multi-Scanner" description="Tap-to-scan with multiple detection" icon="grid-outline" onPress={startFindAndPickScanner} />
        <ModuleCard title="AR Overlay" description="Real-time augmented scanning overlay" icon="scan-outline" onPress={startArOverlayScanner} />
      </ScrollView>
    </View>
  );
}