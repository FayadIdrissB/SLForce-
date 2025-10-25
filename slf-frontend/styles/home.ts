import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* Container */
  home__safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  home__scroll: {
    flex: 1,
  },
  home__scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 80,      // espace top propre (équilibré)
    paddingBottom: 100,  // pour éviter le cut du bas
  },

  /* Header */
  home__header: {
    alignItems: "center",
    marginBottom: 40,
  },
  home__logoBackground: {
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
  home__logoImage: {
    width: 80,
    height: 80,
  },
  home__title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
    textAlign: "center",
  },
  home__subtitle: {
    fontSize: 16,
    color: "#2563EB",
    marginTop: 6,
    letterSpacing: 0.3,
    textAlign: "center",
  },

  /* Privacy link */
  home__privacyLinkWrapper: {
    marginTop: 32,
  },
  home__privacyLink: {
    textAlign: "center",
    color: "#2563EB",
    fontSize: 14,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});

export default styles;