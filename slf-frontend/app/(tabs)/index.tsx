// app/Home.tsx
import "expo-router/entry";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View className="items-center px-6">
          {/* Logo */}
          <View className="bg-blue-600 p-6 rounded-2xl mb-6 shadow-lg shadow-blue-800">
            <Image
              source={require("../assets/icon.png")} 
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <Text className="text-3xl font-bold text-white text-center">
            Bienvenue sur <Text className="text-blue-500">SLForce</Text> 💪🏽
          </Text>

          {/* Subtitle */}
          <Text className="text-base text-slate-400 mt-2 text-center">
            Ton app React Native avec NativeWind est prête à décoller 🚀
          </Text>

          {/* Button */}
          <TouchableOpacity className="mt-8 bg-blue-600 px-8 py-3 rounded-full flex-row items-center justify-center active:bg-blue-700">
            <Text className="text-white text-lg font-semibold">Commencer</Text>
          </TouchableOpacity>

          {/* Privacy link */}
          <TouchableOpacity className="mt-8">
            <Text className="text-blue-400 underline text-center">
              Politique de confidentialité
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}