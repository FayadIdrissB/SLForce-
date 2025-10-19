import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  register__safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  register__scroll: {
    flex: 1,
  },
  register__scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 120,
  },
  register__header: {
    alignItems: "center",
    marginBottom: 40,
  },
  register__logoBackground: {
    backgroundColor: "#2563EB",
    borderRadius: 25,
    padding: 24,
    marginBottom: 18,
    shadowColor: "#2563EB",
    shadowOpacity: 0.3,
    shadowRadius: 8,
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
    fontSize: 15,
    color: "#2563EB",
    marginTop: 6,
    letterSpacing: 0.5,
    textAlign: "center",
  },
});

export default styles;