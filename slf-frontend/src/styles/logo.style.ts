import { StyleSheet } from "react-native"

export const creatLogoStyle = () => {
    const styles = StyleSheet.create({
        logoContainer: {
            width: 120,
            height: 120,
            backgroundColor: 'blue',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            width: 100,
            height: 100,
        },

        // title log
        titleContainer: {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
        },
        title: {
            fontSize: 24,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 4,
        },
        subtitle: {
            fontSize: 16,
            color: 'blue',
            fontWeight: 'bold',
            marginBottom: 20,
        },
    })
    return styles
}