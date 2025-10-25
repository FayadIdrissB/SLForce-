// Import from libraries
import React, { useState, useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import styles from "./ui/authForm";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [role, setRole] = useState<"eleve" | "coach">("eleve");
  const translateX = useRef(new Animated.Value(0)).current;

  // Animation du fond bleu
  useEffect(() => {
    Animated.spring(translateX, {
      toValue: activeTab === "login" ? 0 : 150,
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  }, [activeTab]);

  return (
    <View style={styles.auth__container}>
      {/* --- Onglets Connexion / Inscription --- */}
      <View style={styles.auth__tabs}>
        <Animated.View
          style={[styles.auth__tabsIndicator, { transform: [{ translateX }] }]}
        />
        <TouchableOpacity
          style={styles.auth__tabButton}
          onPress={() => setActiveTab("login")}
        >
          <Text
            style={[
              styles.auth__tabText,
              activeTab === "login" && styles.auth__tabTextActive,
            ]}
          >
            Connexion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.auth__tabButton}
          onPress={() => setActiveTab("register")}
        >
          <Text
            style={[
              styles.auth__tabText,
              activeTab === "register" && styles.auth__tabTextActive,
            ]}
          >
            Inscription
          </Text>
        </TouchableOpacity>
      </View>

      {/* --- FORM Connexion --- */}
      {activeTab === "login" ? (
        <>
          <View style={styles.auth__inputGroup}>
            <Text style={styles.auth__label}>Email</Text>
            <View style={styles.auth__inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.auth__input}
                placeholder="ton.email@exemple.fr"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.auth__inputGroup}>
            <Text style={styles.auth__label}>Mot de passe</Text>
            <View style={styles.auth__inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.auth__input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.auth__submitButton}>
            <Text style={styles.auth__submitText}>Se connecter 🔥</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* --- FORM Inscription --- */}
          <View style={styles.auth__inputGroup}>
            <Text style={styles.auth__label}>Prénom</Text>
            <View style={styles.auth__inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.auth__input}
                placeholder="Entre ton prénom..."
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View style={styles.auth__inputGroup}>
            <Text style={styles.auth__label}>Email</Text>
            <View style={styles.auth__inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.auth__input}
                placeholder="ton.email@exemple.fr"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.auth__inputGroup}>
            <Text style={styles.auth__label}>Mot de passe</Text>
            <View style={styles.auth__inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.auth__input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View style={styles.auth__inputGroup}>
            <Text style={styles.auth__label}>Confirme ton mot de passe</Text>
            <View style={styles.auth__inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.auth__input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          {/* Sélecteur de rôle */}
          <View style={styles.auth__roleContainer}>
            <Text style={styles.auth__label}>Je suis un...</Text>
            <View style={styles.auth__roleButtons}>
              <TouchableOpacity
                style={[
                  styles.auth__roleButton,
                  role === "eleve" && styles.auth__roleButtonActive,
                ]}
                onPress={() => setRole("eleve")}
              >
                <Text
                  style={[
                    styles.auth__roleText,
                    role === "eleve" && styles.auth__roleTextActive,
                  ]}
                >
                  💪 ÉLÈVE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.auth__roleButton,
                  role === "coach" && styles.auth__roleButtonActive,
                ]}
                onPress={() => setRole("coach")}
              >
                <Text
                  style={[
                    styles.auth__roleText,
                    role === "coach" && styles.auth__roleTextActive,
                  ]}
                >
                  🏋️‍♂️ COACH
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.auth__submitButton}>
            <Text style={styles.auth__submitText}>Rejoindre SLForce 💪</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}