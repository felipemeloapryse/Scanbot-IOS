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
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "flex-end",
},

modalContainer: {
  backgroundColor: "#FFFFFF",
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  padding: 24,
  maxHeight: "75%",
},

modalHandle: {
  width: 40,
  height: 5,
  backgroundColor: "#D1D5DB",
  borderRadius: 10,
  alignSelf: "center",
  marginBottom: 16,
},

modalTitle: {
  fontSize: 22,
  fontWeight: "700",
  color: "#111111",
  marginBottom: 20,
},

modalSectionTitle: {
  fontSize: 14,
  fontWeight: "700",
  color: "#6B7280",
  marginTop: 16,
  marginBottom: 8,
},

modalCard: {
  backgroundColor: "#FAFAFA",
  padding: 14,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#F0F0F0",
  marginBottom: 10,
},

modalItemRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 6,
},

modalLabel: {
  fontSize: 14,
  color: "#6B7280",
},

modalValue: {
  fontSize: 15,
  fontWeight: "600",
  color: "#111111",
},

closeButton: {
  marginTop: 20,
  backgroundColor: "#E30613",
  padding: 16,
  borderRadius: 14,
  alignItems: "center",
},

closeButtonText: {
  color: "#FFF",
  fontWeight: "700",
  fontSize: 16,
},
});