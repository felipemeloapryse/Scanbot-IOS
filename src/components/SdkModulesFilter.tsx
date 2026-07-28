import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/homeStyles";
import type { IoniconName } from "./ModuleCard";

export const SDK_FILTERS = ["All", "Barcodes", "Documents", "Data Capture"] as const;
export type SdkFilter = (typeof SDK_FILTERS)[number];

type SdkModulesFilterProps = {
  selected: SdkFilter;
  onSelect: (filter: SdkFilter) => void;
};

type FilterOption = {
  label: SdkFilter;
  icon: IoniconName;
};

export default function SdkModulesFilter({
  selected,
  onSelect,
}: SdkModulesFilterProps) {
  const filters: FilterOption[] = [
    { label: "All", icon: "apps-outline" },
    { label: "Barcodes", icon: "barcode-outline" },
    { label: "Documents", icon: "document-text-outline" },
    { label: "Data Capture", icon: "scan-outline" },
  ];

  return (
    <View style={{ marginTop: 10, paddingBottom: 30 }}>
      <Text style={styles.sdkTitle}>SDK Modules</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((item) => {
          const isActive = selected === item.label;

          return (
            <TouchableOpacity
              key={item.label}
              onPress={() => onSelect(item.label)}
              style={[
                styles.filterButton,
                isActive && styles.filterButtonActive,
              ]}
            >
              <Ionicons
                name={item.icon}
                size={16}
                color={isActive ? "#E30613" : "#6B7280"}
                style={{ marginRight: 8 }}
              />
              <Text
                style={[
                  styles.filterText,
                  isActive && styles.filterTextActive,
                ]}
              >
                {" "}
                {item.label}{" "}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
