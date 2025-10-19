// Import of the different libraries
import { View, ScrollView, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import form components
import AuthForm from "../../components/authForm/app";

// Import css style
import styles from "./app";

const logo = require("../../../assets/logo.png");


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
          <View style={styles.register__logoBackground}>
            <Image source={logo} style={styles.register__logoImage} />
          </View>
          <Text style={styles.register__title}>BEARLIFT</Text>
          <Text style={styles.register__subtitle}>Street Workout Community</Text>
        </View>

        {/* FORM */}
        {/* @ts-expect-error AuthForm props are not typed in the module */}
        <AuthForm defaultTab="inscription" />
      </ScrollView>
    </SafeAreaView>
  );
}