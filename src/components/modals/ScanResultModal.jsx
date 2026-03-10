import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/homeStyles";

export default function ScanResultModal({ visible, data, title, sectionTitle, onClose }) {

  if (!data) return null;

  const Field = ({ label, value }) => (
    <View style={styles.modalItemRow}>
      <Text style={styles.modalLabel}>{label}</Text>
      <Text style={styles.modalValue}>{value || "-"}</Text>
    </View>
  );

  const formatLabel = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .replace(/^./, (s) => s.toUpperCase());

  return (
    <Modal visible={visible} transparent animationType="fade">

      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>

          <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={styles.modalTitle}>{title}</Text>

            <Text style={styles.modalSectionTitle}>{sectionTitle}</Text>

            <View style={styles.modalCard}>

              {Object.entries(data).map(([key, value]) => (
                <Field
                  key={key}
                  label={formatLabel(key)}
                  value={value}
                />
              ))}

            </View>

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>

          </ScrollView>

        </View>
      </View>

    </Modal>
  );
}