import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./ui/about";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")} // ton icône de l’ours
          style={styles.logo}
        />
      </View>

      {/* Titre + version */}
      <Text style={styles.title}>BearLift v1.0.0</Text>
      <Text style={styles.subtitle}>
        © 2024 BearLift. Tous droits réservés.
      </Text>

      {/* Bas de page */}
      <Text style={styles.footer}>
        Made with <Text style={styles.emoji}>💪</Text> pour la{" "}
        <Text style={styles.highlight}>street workout community</Text>
      </Text>
    </View>
  );
}
