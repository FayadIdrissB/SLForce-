import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* Container principal */
  auth__container: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  /* Onglets */
  auth__tabs: {
    flexDirection: "row",
    backgroundColor: "#E2E8F0",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    position: "relative",
  },
  auth__tabsIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 15,
  },
  auth__tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    zIndex: 10,
  },
  auth__tabText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#64748B",
  },
  auth__tabTextActive: {
    color: "#FFF",
  },

  /* Champs */
  auth__inputGroup: {
    marginBottom: 16,
  },
  auth__label: {
    fontWeight: "600",
    fontSize: 15,
    color: "#0F172A",
    marginBottom: 6,
  },
  auth__inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  auth__input: {
    flex: 1,
    fontSize: 16,
    color: "#0F172A",
    paddingVertical: 10,
    marginLeft: 8,
  },

  /* Sélecteur de rôle */
  auth__roleContainer: {
    marginTop: 12,
  },
  auth__roleButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  auth__roleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 16,
    paddingVertical: 20,
    marginHorizontal: 4,
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  auth__roleButtonActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },
  auth__roleText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  auth__roleTextActive: {
    color: "#FFF",
  },

  /* Bouton principal */
  auth__submitButton: {
    backgroundColor: "#2563EB",
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: 20,
  },
  auth__submitText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default styles;