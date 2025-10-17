import { StyleSheet } from "react-native"

export default function createFormStyle() {
    const styles = StyleSheet.create({
        // Form
        linkFormContainer: {
            backgroundColor: '#f1f1f1',
            width: '100%',
            borderRadius: 5,
            padding: 6,
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
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        button: {
            width: '100%',
            padding: 14,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        buttonFunctionContainer: {
            width: '100%',
            height: 60,
            borderRadius: 5,
            padding: 6,
            gap: 14,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 14,
        },
        buttonFunction: {
            width: '40%',
            height: '100%',
            paddingVertical: 14,
            paddingHorizontal: 5,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: "center",
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
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