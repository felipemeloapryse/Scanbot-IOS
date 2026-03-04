import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";


function ModuleCard({
  title,
  description,
  route,
  icon,
}: {
  title: string;
  description: string;
  route: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => router.push(route as Href)}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={22} color="#E30613" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#C4C4C4" />
    </TouchableOpacity>
  );
}

function SdkModulesFilter() {
  const filters = [
    { label: "All", icon: "apps-outline" },
    { label: "Barcodes", icon: "barcode-outline" },
    { label: "Documents", icon: "document-text-outline" },
    { label: "Data Capture", icon: "scan-outline" },
  ];

  const [selected, setSelected] = useState("All");

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.sdkTitle}>SDK Modules</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20, borderBottomWidth: 1, borderColor: "#6B7280", paddingBottom: 20 }}
      >
        {filters.map((item) => {
          const isActive = selected === item.label;

          return (
            <TouchableOpacity
              key={item.label}
              activeOpacity={0.85}
              onPress={() => setSelected(item.label)}
              style={[
                styles.filterButton,
                isActive && styles.filterButtonActive,
              ]}
            >
              <Ionicons
                name={item.icon as keyof typeof Ionicons.glyphMap}
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
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../src/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <SdkModulesFilter />

        <Text style={[styles.title, { marginTop: 30 }]}>
          Barcode Scanner SDK
        </Text>
        <Text style={styles.subtitle}>
          Explore scanning modes and integration examples
        </Text>

        <View style={styles.section}>
          <ModuleCard
            title="Single Scanner"
            description="Fast scanning of individual barcodes"
            route="/modules/single"
            icon="barcode-outline"
          />

          <ModuleCard
            title="Batch Scanner"
            description="Capture multiple barcodes in one session"
            route="/batch-scanner"
            icon="albums-outline"
          />

          <ModuleCard
            title="Multi-Scanner"
            description="Tap-to-scan with multiple detection"
            route="/multi-scanner"
            icon="grid-outline"
          />

          <ModuleCard
            title="AR Overlay"
            description="Real-time augmented scanning overlay"
            route="/ar-scanner"
            icon="scan-outline"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },

  logo: {
    width: 250,
    height: 40,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 30,
    marginLeft: -10,
  },

  sdkTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000919",
    marginBottom: 16,
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 12,
  },

  filterButtonActive: {
    backgroundColor: "#FFF1F2",
    borderColor: "#E30613",
  },

  filterText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6B7280",
  },

  filterTextActive: {
    color: "#E30613",
    fontWeight: "700",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111111",
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 20,
  },

  section: {
    marginTop: 0,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#FFF1F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111111",
  },

  cardDescription: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 4,
  },
});