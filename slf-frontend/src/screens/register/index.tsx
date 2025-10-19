// Import of the different libraries
import { View, ScrollView, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import form components
import AuthForm from "../../components/authForm/app";

// import IMG 
const logo = require("../../../assets/logo.png");


export default function Register() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1 pt-40"
        contentContainerClassName="flex-grow px-5 pb-32"
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View className="items-center mb-10">
          <View className="bg-blue-600 rounded-2xl p-6 mb-5 shadow-lg shadow-blue-500/40">
            <Image source={logo} className="w-20 h-20" />
          </View>
          <Text className="text-3xl font-bold text-slate-900 text-center">
            SLForce
          </Text>
          <Text className="text-base text-blue-600 mt-1 tracking-wide text-center">
            Street Workout Community
          </Text>
        </View>

        {/* FORM */}
        {/* @ts-expect-error AuthForm props are not typed in the module */}
        <AuthForm defaultTab="register" />
      </ScrollView>
    </SafeAreaView>
  );
}