// import of the different libraries
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Linking } from "react-native"; 

// import CSS styles
import styles from "../../styles/privacy";


export default function Privacy() {

  // Variable to handle link opening mail
  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.privacy__safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        style={styles.privacy__scroll}
        contentContainerStyle={styles.privacy__scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.privacy__header}>
          <Text style={styles.privacy__title}>Politique de Confidentialité</Text>
          <Text style={styles.privacy__subtitle}>Dernière mise à jour : 26 octobre 2025</Text>
        </View>

        {/* SECTION 1 */}
        <View style={styles.privacy__section}>
          <Text style={styles.privacy__sectionTitle}>1. Introduction</Text>
          <Text style={styles.privacy__text}>
            Bienvenue sur SLForce 💪 — une application dédiée à la communauté du Street Workout.
            Nous prenons la protection de vos données personnelles très au sérieux. 
            Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
          </Text>
        </View>

        {/* SECTION 2 */}
        <View style={styles.privacy__section}>
          <Text style={styles.privacy__sectionTitle}>2. Données collectées</Text>
          <Text style={styles.privacy__text}>
            Nous collectons uniquement les informations nécessaires à votre expérience : 
            prénom, adresse e-mail, mot de passe et rôle (élève ou coach). 
            Ces données ne seront jamais partagées avec des tiers sans votre consentement.
          </Text>
        </View>

        {/* SECTION 3 */}
        <View style={styles.privacy__section}>
          <Text style={styles.privacy__sectionTitle}>3. Sécurité et Confidentialité</Text>
          <Text style={styles.privacy__text}>
            Vos données sont chiffrées et stockées de manière sécurisée. 
            Nous mettons tout en œuvre pour prévenir tout accès non autorisé à vos informations personnelles.
          </Text>
        </View>

        {/* CONTACT */}
        <View style={styles.privacy__footer}>
          <Text style={styles.privacy__text}>
            Pour toute question, contactez-nous à :{" "}
            <Text
              style={styles.privacy__link}
              onPress={() => handleOpenLink("mailto:contact@slforce.com")}
            >
              contact@slforce.com
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}