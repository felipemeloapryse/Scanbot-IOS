import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/homeStyles";

export default function SingleScanResultModal({
  visible,
  results,
  onClose,
}) {
  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose} >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Scan Result</Text>
          <FlatList data={results} keyExtractor={(item, index) => index.toString()} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
              <View style={styles.resultCard}>
                <Text style={styles.resultLabel}>Barcode</Text>
                <Text style={styles.resultValue}>{item}</Text>
              </View>
            )}
          />
          <TouchableOpacity style={styles.closeButton} activeOpacity={0.85} onPress={onClose} >
            <Text style={styles.closeButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}