import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* Root container */
  register__safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC", // fond clair et propre
  },

  register__scroll: {
    flex: 1,
  },

  register__scrollContent: {
    flexGrow: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  /* Header */
  register__header: {
    alignItems: "center",
    marginBottom: 40,
  },

  register__logoContainer: {
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: "#2563EB",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  register__logoImage: {
    width: 80,
    height: 80,
  },

  register__title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
    textAlign: "center",
  },

  register__subtitle: {
    fontSize: 16,
    color: "#2563EB",
    marginTop: 6,
    textAlign: "center",
    letterSpacing: 0.3,
  },
});

export default styles;