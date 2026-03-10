import { ScrollView, Text, View } from "react-native";
import ModuleCard from "../components/ModuleCard";
import { styles } from "../styles/homeStyles";

import { startDocumentOcrService } from "../services/document/documentOcr";
import { startDocumentScannerService } from "../services/document/documentScanner";

export default function DocumentScanner({ onScanFinished }) {


  return (
    <View>
      <View style={styles.cardsHeader}>
        <Text style={styles.title}>Document Scanner SDK</Text>
        <Text style={styles.subtitle}>Explore document scanning and OCR capabilities</Text>
      </View>
      <ScrollView style={styles.cardsScroll} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false} >
        <ModuleCard title="Document Scanner" description="Create high quality document scans with user guidance and edge detection" icon="document-text-outline" onPress={startDocumentScannerService} />
        <ModuleCard title="Run OCR on Document Scan" description="Create a high quality sca,. extract all text elements, and export as searchable PDF" icon="search-outline" onPress={startDocumentOcrService} />
      </ScrollView>
    </View>
  );
}