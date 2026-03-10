import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/homeStyles";

export default function DriverLicenseResultModal({ visible, data, onClose }) {

  if (!data) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>

          <View style={styles.modalHandle} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.modalTitle}>Driver License Result</Text>
            <Text style={styles.modalSectionTitle}>Personal Information</Text>
            <View style={styles.modalCard}>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>First Name</Text>
                <Text style={styles.modalValue}>{data.firstName}</Text>
              </View>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>Last Name</Text>
                <Text style={styles.modalValue}>{data.lastName}</Text>
              </View>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>Middle Name</Text>
                <Text style={styles.modalValue}>{data.middleName}</Text>
              </View>
            </View>
            <Text style={styles.modalSectionTitle}>License Information</Text>

            <View style={styles.modalCard}>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>License Number</Text>
                <Text style={styles.modalValue}>{data.licenseNumber}</Text>
              </View>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>Birth Date</Text>
                <Text style={styles.modalValue}>{data.birthDate}</Text>
              </View>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>Expiration</Text>
                <Text style={styles.modalValue}>{data.expirationDate}</Text>
              </View>
            </View>
            <Text style={styles.modalSectionTitle}>Address</Text>

            <View style={styles.modalCard}>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>Street</Text>
                <Text style={styles.modalValue}>{data.address}</Text>
              </View>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>City</Text>
                <Text style={styles.modalValue}>{data.city}</Text>
              </View>
              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>State</Text>
                <Text style={styles.modalValue}>{data.state}</Text>
              </View>

              <View style={styles.modalItemRow}>
                <Text style={styles.modalLabel}>ZIP</Text>
                <Text style={styles.modalValue}>{data.zip}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={onClose} >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
