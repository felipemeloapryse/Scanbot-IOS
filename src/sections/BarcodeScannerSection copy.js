import { ScrollView, Text, View } from "react-native";
import ModuleCard from "../components/ModuleCard";
import { startArOverlayScanner } from "../services/barcode/arOverlay";
import { startBatchScanner } from "../services/barcode/batchScanner";
import { startScanAndCountScanner } from "../services/barcode/multiScanner";
import { startSingleScanner } from "../services/barcode/singleScanner";
import { styles } from "../styles/homeStyles";

export default function BarcodeScannerSection({ onScanFinished }) {
  async function handleSingleScan() {
    try {
      const items = await startSingleScanner();
      if (items && items.length > 0) {
        const barcodeNumber = items[0]?.barcode?.text;
        if (barcodeNumber) {
          onScanFinished([barcodeNumber]);
        }
      }
    } catch (error) {
      console.error("Erro no scanner:", error);
    }
  }

  return (
    <View style={{ }}>
      <View style={styles.cardsHeader}>
        <Text style={styles.title}>Barcode Scanner SDK</Text>
        <Text style={styles.subtitle}>
          Explore scanning modes and integration examples
        </Text>
      </View>
      <ScrollView style={styles.cardsScroll} contentContainerStyle={{ paddingBottom: 25}} showsVerticalScrollIndicator={false} >
        <ModuleCard title="Single Scanner" description="Fast scanning of individual barcodes" icon="barcode-outline" onPress={handleSingleScan} />
        <ModuleCard title="Batch Scanner" description="Capture multiple barcodes in one session" icon="albums-outline" onPress={startBatchScanner} />
        <ModuleCard title="Multi-Scanner" description="Tap-to-scan with multiple detection" icon="grid-outline" onPress={startScanAndCountScanner} />
        <ModuleCard title="AR Overlay" description="Real-time augmented scanning overlay" icon="scan-outline" onPress={startArOverlayScanner} />
      </ScrollView>
    </View>
  );
}