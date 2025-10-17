import { StyleSheet } from "react-native";

export default function inputStyle() {
    const styles = StyleSheet.create({
        formGroup: {
            gap: 4,
            width: '100%',
          },
          label: {
            fontSize: 16,
            color: 'gray',
            fontWeight: 'bold',
          },
          inputGroup: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#f1f1f1',
            padding: 5,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
          },
          input: {
            flex: 1,
            padding: 5,
          },
    })

    return styles
}