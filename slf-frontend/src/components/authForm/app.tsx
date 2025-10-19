// Import of the different libraries
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';

// Import css style
import styles from './authForm';


export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [role, setRole] = useState<'eleve' | 'coach'>('eleve');
  const translateX = useRef(new Animated.Value(0)).current;

  // Animation of the blue background moving
  useEffect(() => {
    Animated.spring(translateX, {
      toValue: activeTab === 'login' ? 0 : 150, // horizontal shift
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  }, [activeTab]);

  return (
    <View style={styles.formContainer}>
      <View style={styles.tabContainer}>
        <Animated.View
          style={[
            styles.tabHighlight,
            {
              transform: [{ translateX }],
            },
          ]}
        />
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab('login')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'login' && styles.tabTextActive,
            ]}
          >
            Connexion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab('register')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'register' && styles.tabTextActive,
            ]}
          >
            Inscription
          </Text>
        </TouchableOpacity>
      </View>

      {/* --- FORM Login --- */}
      {activeTab === 'login' ? (
        <>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="mail-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.input}
                placeholder="ton.email@exemple.fr"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mot de passe</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Se connecter 🔥</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* FORM Register*/}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Prénom</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="person-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.input}
                placeholder="Entre ton prénom..."
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="mail-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.input}
                placeholder="ton.email@exemple.fr"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mot de passe</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirme ton mot de passe</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Je suis un...</Text>
            <View style={styles.roleContainer}>
              <TouchableOpacity
                style={[
                  styles.roleButton,
                  role === 'eleve' && styles.roleButtonActive,
                ]}
                onPress={() => setRole('eleve')}
              >
                <View style={styles.roleContent}>
                  <Text style={styles.roleEmoji}>💪</Text>
                  <Text
                    style={[
                      styles.roleText,
                      role === 'eleve' && styles.roleTextActive,
                    ]}
                  >
                    ÉLÈVE
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.roleButton,
                  role === 'coach' && styles.roleButtonActive,
                ]}
                onPress={() => setRole('coach')}
              >
                <View style={styles.roleContent}>
                  <Text style={styles.roleEmoji}>🏋️‍♂️</Text>
                  <Text
                    style={[
                      styles.roleText,
                      role === 'coach' && styles.roleTextActive,
                    ]}
                  >
                    COACH
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Rejoindre SLForce 💪</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}