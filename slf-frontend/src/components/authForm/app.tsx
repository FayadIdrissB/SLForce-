// Import from libraries
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";


export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [role, setRole] = useState<"eleve" | "coach">("eleve");
  const translateX = useRef(new Animated.Value(0)).current;

  // Animation of the blue background
  useEffect(() => {
    Animated.spring(translateX, {
      toValue: activeTab === "login" ? 0 : 150,
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  }, [activeTab]);

  return (
    <View className="bg-white rounded-2xl p-6 shadow-md shadow-black/10">
      <View className="flex-row bg-slate-200 rounded-xl mb-6 relative overflow-hidden">
        <Animated.View
          className="absolute top-0 left-0 w-1/2 h-full bg-blue-600 rounded-xl"
          style={{
            transform: [{ translateX }],
          }}
        />
        <TouchableOpacity
          className="flex-1 py-3 items-center z-10"
          onPress={() => setActiveTab("login")}
        >
          <Text
            className={`font-semibold text-[15px] ${
              activeTab === "login" ? "text-white" : "text-slate-500"
            }`}
          >
            Connexion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 py-3 items-center z-10"
          onPress={() => setActiveTab("register")}
        >
          <Text
            className={`font-semibold text-[15px] ${
              activeTab === "register" ? "text-white" : "text-slate-500"
            }`}
          >
            Inscription
          </Text>
        </TouchableOpacity>
      </View>

      {/* --- FORM Connexion --- */}
      {activeTab === "login" ? (
        <>
          <View className="mb-5">
            <Text className="font-semibold text-slate-900 mb-1 text-[15px]">
              Email
            </Text>
            <View className="flex-row items-center bg-slate-50 border border-slate-300 rounded-xl px-3">
              <Ionicons name="mail-outline" size={20} color="#2563EB" />
              <TextInput
                className="flex-1 text-[16px] text-slate-900 py-3 ml-2"
                placeholder="ton.email@exemple.fr"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View className="mb-5">
            <Text className="font-semibold text-slate-900 mb-1 text-[15px]">
              Mot de passe
            </Text>
            <View className="flex-row items-center bg-slate-50 border border-slate-300 rounded-xl px-3">
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                className="flex-1 text-[16px] text-slate-900 py-3 ml-2"
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <TouchableOpacity className="bg-blue-600 py-4 rounded-xl mt-2">
            <Text className="text-white font-bold text-center text-[17px]">
              Se connecter 🔥
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* --- FORM Register --- */}
          <View className="mb-5">
            <Text className="font-semibold text-slate-900 mb-1 text-[15px]">
              Prénom
            </Text>
            <View className="flex-row items-center bg-slate-50 border border-slate-300 rounded-xl px-3">
              <Ionicons name="person-outline" size={20} color="#2563EB" />
              <TextInput
                className="flex-1 text-[16px] text-slate-900 py-3 ml-2"
                placeholder="Entre ton prénom..."
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View className="mb-5">
            <Text className="font-semibold text-slate-900 mb-1 text-[15px]">
              Email
            </Text>
            <View className="flex-row items-center bg-slate-50 border border-slate-300 rounded-xl px-3">
              <Ionicons name="mail-outline" size={20} color="#2563EB" />
              <TextInput
                className="flex-1 text-[16px] text-slate-900 py-3 ml-2"
                placeholder="ton.email@exemple.fr"
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View className="mb-5">
            <Text className="font-semibold text-slate-900 mb-1 text-[15px]">
              Mot de passe
            </Text>
            <View className="flex-row items-center bg-slate-50 border border-slate-300 rounded-xl px-3">
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                className="flex-1 text-[16px] text-slate-900 py-3 ml-2"
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View className="mb-5">
            <Text className="font-semibold text-slate-900 mb-1 text-[15px]">
              Confirme ton mot de passe
            </Text>
            <View className="flex-row items-center bg-slate-50 border border-slate-300 rounded-xl px-3">
              <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
              <TextInput
                className="flex-1 text-[16px] text-slate-900 py-3 ml-2"
                placeholder="••••••••"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>

          <View className="mt-2">
            <Text className="font-semibold text-slate-900 mb-2 text-[15px]">
              Je suis un...
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                className={`flex-1 border rounded-2xl py-7 mx-1 items-center ${
                  role === "eleve"
                    ? "bg-blue-600 border-blue-600"
                    : "bg-slate-50 border-slate-300"
                }`}
                onPress={() => setRole("eleve")}
              >
                <Text
                  className={`text-[16px] font-bold ${
                    role === "eleve" ? "text-white" : "text-slate-900"
                  }`}
                >
                  💪 ÉLÈVE
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`flex-1 border rounded-2xl py-7 mx-1 items-center ${
                  role === "coach"
                    ? "bg-blue-600 border-blue-600"
                    : "bg-slate-50 border-slate-300"
                }`}
                onPress={() => setRole("coach")}
              >
                <Text
                  className={`text-[16px] font-bold ${
                    role === "coach" ? "text-white" : "text-slate-900"
                  }`}
                >
                  🏋️‍♂️ COACH
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-blue-600 py-4 rounded-xl mt-10">
            <Text className="text-white font-bold text-center text-[17px]">
              Rejoindre SLForce 💪
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}