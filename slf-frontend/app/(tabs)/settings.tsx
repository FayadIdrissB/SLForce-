// Import of the different libraries
import { Stack, usePathname } from "expo-router";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import About from "../../components/About";
import { SectionCardSettings } from "../../components/SectionCardSettings";
import { SettingCard } from "../../components/SettingCard";

// Import CSS styles
import { styles } from "../../styles/settings";

// Import Navigation component
import Navigation from "../../components/navigation";

export default function Settings() {
  const pathname = usePathname();
  const activePage = pathname.split("/").pop();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF6FF" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 96 }} 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Réglages</Text>
            <Text style={styles.headerSubtitle}>Personnalise ton expérience</Text>
          </View>

          <View style={styles.profileSection}>
            <View style={styles.profileInfo}>
              <View style={styles.iconContainerProfil}>
                <Text style={styles.iconText}>👤</Text>
              </View>
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>Youssef</Text>
                <Text style={styles.profileUsername}>@youssef_beast</Text>
                <View style={styles.membershipContainer}>
                  <Text style={styles.membershipText}>
                    🔥 Membre depuis Mars 2024
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <SectionCardSettings title="COMPTE">
            <SettingCard
              logo="👤"
              title="Profil"
              description="Modifier tes infos personnelles"
              hasChevron
            />
            <SettingCard
              logo="🔒"
              title="Confidentialité"
              description="Contrôle qui peut te voir"
              hasChevron
            />
            <SettingCard
              logo="🛡️"
              title="Sécurité"
              description="Mot de passe et authentification"
              hasChevron
            />
          </SectionCardSettings>

          <SectionCardSettings title="PRÉFÉRENCES">
            <SettingCard
              logo="🔔"
              title="Notifications"
              description="Reçois les messages importants"
              hasSwitch
            />
            <SettingCard
              logo="🔊"
              title="Sons"
              description="Sons des messages et appels"
              hasSwitch
            />
            <SettingCard
              logo="🌙"
              title="Mode sombre"
              description="Thème actuel"
              hasSwitch
            />
            <SettingCard
              logo="🌐"
              title="Langue"
              description="Français"
              hasChevron
            />
          </SectionCardSettings>

          <SectionCardSettings title="ABONNEMENT">
            <SettingCard
              logo="💳"
              title="Paiements"
              description="Gérer tes abonnements"
              hasChevron
            />
            <SettingCard
              logo="⭐"
              title="BearLift Premium"
              description="Passe en mode Pro 🔥"
              hasChevron
            />
          </SectionCardSettings>

          <SectionCardSettings title="SUPPORT">
            <SettingCard
              logo="❓"
              title="Aide & Support"
              description="FAQ et contact"
              hasChevron
            />
            <SettingCard
              logo="👁️"
              title="Conditions d'utilisation"
              description="CGU et politique"
              hasChevron
            />
          </SectionCardSettings>

          <View style={styles.section}>
            <Text style={styles.warningTitle}>ZONE DANGEREUSE</Text>

            <View style={styles.deleteAccountContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconTrash}>🗑️</Text>
              </View>

              <View style={styles.deleteAccountTextContainer}>
                <Text style={styles.deleteAccountTitle}>Supprimer mon compte</Text>
                <Text style={styles.deleteAccountSubtitle}>
                  Cette action est irréversible
                </Text>
              </View>

              <View style={styles.arrowContainer}>
                <Text style={styles.arrowText}>›</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.logoutButtonRed}>
            <Text style={styles.logoutButtonRedText}>Se déconnecter</Text>
          </TouchableOpacity>

          <About />
        </ScrollView>

        <Navigation activePage={activePage ?? "settings"} />
      </View>
    </SafeAreaView>
  );
}