// Import of the different libraries
import { useRouter } from "expo-router";
import { View, ScrollView, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import form components
import AuthForm from "../../components/authForm/app";

// Import css style
import styles from "./home";

// import IMG 
const logo = require("../../../assets/logo.png");


export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.home__safeArea}>
      <ScrollView
        style={styles.home__scroll}
        contentContainerStyle={styles.home__scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.home__header}>
          <View style={styles.home__logoBackground}>
            <Image source={logo} style={styles.home__logoImage} />
          </View>
          <Text style={styles.home__title}>BEARLIFT</Text>
          <Text style={styles.home__subtitle}>Street Workout Community</Text>
        </View>

        {/* FORM */}
        {/* @ts-expect-error AuthForm props are not typed in the module */}
        <AuthForm defaultTab="connexion" onSwitchToRegister={() => router.push("/register")} />
      </ScrollView>
    </SafeAreaView>
  );
}