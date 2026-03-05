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
    marginTop: 30,
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
    marginBottom: 30,
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
    justifyContent: "center",
    padding: 24,
  },

  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    maxHeight: "70%",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },

  resultItem: {
    padding: 12,
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    marginBottom: 10,
  },

  resultText: {
    fontSize: 16,
    color: "#111",
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: "#E30613",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  closeButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});