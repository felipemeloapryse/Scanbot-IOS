import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/homeStyles";

export default function SdkModulesFilter() {
  const filters = [
    { label: "All", icon: "apps-outline" },
    { label: "Barcodes", icon: "barcode-outline" },
    { label: "Documents", icon: "document-text-outline" },
    { label: "Data Capture", icon: "scan-outline" },
  ];

  const [selected, setSelected] = useState("All");

  return (
    <View style={{ marginTop: 10, paddingBottom: 15 }}>
      <Text style={styles.sdkTitle}>SDK Modules</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((item) => {
          const isActive = selected === item.label;
          return (
            <TouchableOpacity key={item.label} onPress={() => setSelected(item.label)} style={[ styles.filterButton, isActive && styles.filterButtonActive, ]} >
              <Ionicons name={item.icon} size={16} color={isActive ? "#E30613" : "#6B7280"} style={{ marginRight: 8 }} />
              <Text style={[ styles.filterText, isActive && styles.filterTextActive, ]} >{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}