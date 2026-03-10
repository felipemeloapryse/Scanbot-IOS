import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    paddingHorizontal: 24,
  },

  cardsHeader: {
    paddingHorizontal: 24,
  },

  cardsScroll: {
    paddingHorizontal: 24,
    marginTop: 10,
  },

  logo: {
    width: 250,
    height: 40,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: -15
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

 /* MODAL */

modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 24,
},

modalContainer: {
  width: "100%",
  maxWidth: 420,
  backgroundColor: "#FFFFFF",
  borderRadius: 22,
  padding: 24,

  shadowColor: "#000",
  shadowOpacity: 0.18,
  shadowRadius: 20,
  shadowOffset: { width: 0, height: 10 },
  elevation: 10,
},

modalTitle: {
  fontSize: 22,
  fontWeight: "700",
  color: "#0F172A",
  marginBottom: 18,
  textAlign: "center",
},

/* RESULT CARD */

resultCard: {
  backgroundColor: "#FAFAFA",
  borderRadius: 14,
  padding: 16,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: "#F1F5F9",
},

resultLabel: {
  fontSize: 12,
  color: "#6B7280",
  marginBottom: 4,
  fontWeight: "500",
},

resultValue: {
  fontSize: 18,
  fontWeight: "700",
  color: "#111111",
  letterSpacing: 0.6,
},

/* BUTTON */

closeButton: {
  marginTop: 18,
  backgroundColor: "#E30613",
  paddingVertical: 14,
  borderRadius: 14,
  alignItems: "center",
},

closeButtonText: {
  color: "#FFFFFF",
  fontWeight: "700",
  fontSize: 16,
},

modalContainerLarge: {
  width: "100%",
  maxWidth: 460,
  maxHeight: "85%",
  backgroundColor: "#FFFFFF",
  borderRadius: 22,
  padding: 24,

  shadowColor: "#000",
  shadowOpacity: 0.18,
  shadowRadius: 20,
  shadowOffset: { width: 0, height: 10 },
  elevation: 10,
},

/* SECTION TITLES */

modalSectionTitle: {
  fontSize: 13,
  fontWeight: "700",
  color: "#6B7280",
  marginTop: 16,
  marginBottom: 8,
  letterSpacing: 0.5,
  textTransform: "uppercase",
},

/* INFO ROW */

modalItemRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: "#F1F5F9",
},

modalLabel: {
  fontSize: 14,
  color: "#6B7280",
},

modalValue: {
  fontSize: 15,
  fontWeight: "600",
  color: "#111111",
  maxWidth: "55%",
  textAlign: "right",
},

mrzRaw: {
  fontFamily: "monospace",
  fontSize: 14,
  color: "#111111",
  letterSpacing: 1,
  lineHeight: 20,
}
});