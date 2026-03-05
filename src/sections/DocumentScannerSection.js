import { ScrollView, Text, View } from "react-native";
import ModuleCard from "../components/ModuleCard";
import { styles } from "../styles/homeStyles";

import { runOcrOnDocument } from "../services/document/documentOcr";
import { startDocumentScanner } from "../services/document/documentScanner";

export default function DocumentScannerSection({ onScanFinished }) {

  async function handleDocumentScan() {
    try {
      const result = await startDocumentScanner();

      if (result) {
        onScanFinished?.(result);
      }

    } catch (error) {
      console.error("Erro no Document Scanner:", error);
    }
  }

  async function handleRunOcr() {
    try {
      const result = await runOcrOnDocument();

      if (result) {
        onScanFinished?.(result);
      }

    } catch (error) {
      console.error("Erro ao rodar OCR:", error);
    }
  }

  return (
    <View>
      <View style={styles.cardsHeader}>
        <Text style={styles.title}>Document Scanner SDK</Text>
        <Text style={styles.subtitle}>
          Explore document scanning and OCR capabilities
        </Text>
      </View>

      <ScrollView style={styles.cardsScroll} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false} >
        <ModuleCard title="Document Scanner" description="Create high quality document scans with user guidance and edge detection" icon="document-text-outline" onPress={handleDocumentScan} />
        <ModuleCard title="Run OCR on Document Scan" description="Create a high quality sca,. extract all text elements, and export as searchable PDF" icon="search-outline" onPress={handleRunOcr} />
      </ScrollView>
    </View>
  );
}