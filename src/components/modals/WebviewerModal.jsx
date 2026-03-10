import React, { useEffect } from "react";
import { Modal, Platform, View, StyleSheet, } from "react-native";
import { DocumentView, RNPdftron } from "@pdftron/react-native-pdf";

export default function WebviewerModal({visible, documentPath,onClose,}) {

    useEffect(() => {
        if (RNPdftron) {
            RNPdftron.enableJavaScript(true);
        }
    }, []);

    if (!visible || !documentPath) return null;

    return (
        <Modal visible={visible} animationType="slide" >
            <View style={styles.container}>
                <DocumentView document={documentPath} theme="light" showLeadingNavButton={true} readOnly={false} showAnnotationToolbar={true} showBottomToolbar={true}  onLeadingNavButtonPressed={onClose} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});