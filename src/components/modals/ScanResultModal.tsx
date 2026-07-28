import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/homeStyles";

export type ScanResultData = Record<string, string | number | null | undefined>;

type ScanResultModalProps = {
  visible: boolean;
  data: ScanResultData | null;
  title: string;
  sectionTitle: string;
  onClose: () => void;
};

type FieldProps = {
  label: string;
  value: string | number | null | undefined;
};

function Field({ label, value }: FieldProps) {
  return (
    <View style={styles.modalItemRow}>
      <Text style={styles.modalLabel}>{label}</Text>
      <Text style={styles.modalValue}>{value ?? "-"}</Text>
    </View>
  );
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^./, (s) => s.toUpperCase());
}

export default function ScanResultModal({
  visible,
  data,
  title,
  sectionTitle,
  onClose,
}: ScanResultModalProps) {
  if (!data) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.modalTitle}>{title}</Text>

            <Text style={styles.modalSectionTitle}>{sectionTitle}</Text>

            <View style={styles.modalCard}>
              {Object.entries(data).map(([key, value]) => (
                <Field key={key} label={formatLabel(key)} value={value} />
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
