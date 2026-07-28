import { useEffect } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { DocumentView, RNPdftron } from "@pdftron/react-native-pdf";

type WebviewerModalProps = {
  visible: boolean;
  documentPath: string | null;
  onClose: () => void;
};

export default function WebviewerModal({
  visible,
  documentPath,
  onClose,
}: WebviewerModalProps) {
  useEffect(() => {
    if (RNPdftron) {
      RNPdftron.enableJavaScript(true);
    }
  }, []);

  if (!visible || !documentPath) return null;

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <DocumentView
          document={documentPath}
          showLeadingNavButton={true}
          readOnly={false}
          topToolbarEnabled={true}
          bottomToolbarEnabled={true}
          onLeadingNavButtonPressed={onClose}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
