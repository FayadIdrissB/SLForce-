import { StyleSheet } from "react-native"

export const createFormStyle = () => {
    const styles = StyleSheet.create({
        // Form
        linkFormContainer: {
            backgroundColor: 'gray',
            width: '100%',
            borderRadius: 5,
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 14,
            // gap: 14,
        },
        linkForm: {
            padding: 10,
            width: '50%',
            paddingHorizontal: 20,
            alignContent: 'center',
            alignItems: 'center',
        },
        formContainer: {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 14,
            width: '100%',
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 20,
        },
        button: {
            width: '100%',
            padding: 14,
            marginTop: 20,
            backgroundColor: 'blue',
            borderRadius: 5,
        },
        // Link
        linkContainer: {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
        },
        link: {
            fontSize: 16,
            color: 'grey',
            fontWeight: 'bold',
        },
        linkText: {
            color: 'blue',
            fontWeight: 'bold',
        },
    })
    return styles
}