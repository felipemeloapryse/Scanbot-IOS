import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/homeStyles";

export default function SingleScanResultModal({ visible, results, onClose, }) {
  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose} >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Scan Result</Text>

          <FlatList data={results} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
              <View style={styles.resultItem}>
                <Text style={styles.resultText}>{item}</Text>
              </View>
            )}
          />

          <TouchableOpacity style={styles.closeButton} onPress={onClose} >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}