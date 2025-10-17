import { StyleSheet } from "react-native"

export default function styleCard() {
    const card = StyleSheet.create({
        label: {
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
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
        }
    })
    return card
}