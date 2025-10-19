import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    paddingTop: 100,
    paddingBottom: 70,
  },
  home__header: {
    alignItems: "center",
    marginBottom: 40,
  },
  home__logoBackground: {
    backgroundColor: "#2563EB",
    borderRadius: 25,
    padding: 24,
    marginBottom: 18,
    shadowColor: "#2563EB",
    shadowOpacity: 0.3,
    shadowRadius: 8,
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
    fontSize: 15,
    color: "#2563EB",
    marginTop: 6,
    letterSpacing: 0.5,
    textAlign: "center",
  },
});

export default styles;