import { StyleSheet } from "react-native";

export default function styleCard() {
  const card = StyleSheet.create({
    containers_rows: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    container_column: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
    iconContainer: {
      padding: 10,
      backgroundColor: "blue",
      borderRadius: 16,
    },
    iconSize: {
      fontSize: 24,
    },
    iconColor: {
      color: "white",
    },
    title: {
      fontSize: 16,
      color: "black",
    },
    subtitle: {
      fontSize: 10,
    },
    container: {
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#fff",
      borderRadius: 10,
      gap: 10,
      marginVertical: 5,
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    session_is_active: {
      color: "white",
      backgroundColor: "green",
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 5,
    },
    securityActions_deconnect: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "gray",
    },
    securityActions_signal_problem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "gray",
      backgroundColor: "red",
      marginBottom: 20,
    },
  });
  return card;
}
