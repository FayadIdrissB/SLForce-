// Import from libraries
import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthForm from "../../components/authForm";
import styles from "../../styles/register";

// Import logo
const logo = require("../../assets/images/logo.png");

export default function Register() {
  return (
    <SafeAreaView style={styles.register__safeArea}>
      <ScrollView
        style={styles.register__scroll}
        contentContainerStyle={styles.register__scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.register__header}>
          <View style={styles.register__logoContainer}>
            <Image source={logo} style={styles.register__logoImage} />
          </View>

          <Text style={styles.register__title}>SLForce</Text>
          <Text style={styles.register__subtitle}>Street Workout Community</Text>
        </View>

        {/* FORMULAIRE */}
        <AuthForm />
      </ScrollView>
    </SafeAreaView>
  );
}