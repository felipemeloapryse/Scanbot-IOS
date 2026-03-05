import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SdkModulesFilter from "../src/components/SdkModulesFilter";
import SingleScanResultModal from "../src/components/SingleScanResultModal";
import BarcodeScannerSection from "../src/sections/BarcodeScannerSection copy";
import DocumentScannerSection from "../src/sections/DocumentScannerSection";
import { styles } from "../src/styles/homeStyles";

export default function Home() {
  const insets = useSafeAreaInsets();

  const [modalVisible, setModalVisible] = useState(false);
  const [scannedItems, setScannedItems] = useState([]);

  
  function handleScanFinished(results) {
    setScannedItems(results);
    setModalVisible(true);
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Image source={require("../src/assets/images/logo.png")} style={styles.logo} resizeMode="contain" />
        <SdkModulesFilter />
      </View>
      <ScrollView>
        <BarcodeScannerSection onScanFinished={handleScanFinished} />
        <DocumentScannerSection/>
      </ScrollView>
      <SingleScanResultModal visible={modalVisible} results={scannedItems} onClose={() => setModalVisible(false)} />
    </View>
  );
}