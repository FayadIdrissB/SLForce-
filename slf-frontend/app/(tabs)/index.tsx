// import of the different libraries
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";

// import of the different assets
const logo = require("../../assets/images/logo.png");

// import of the different components
import AuthForm from "../../components/authForm";

// import CSS styles
import styles from "../../styles/home";


export default function Home() {

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
          <Text style={styles.home__title}>SLForce</Text>
          <Text style={styles.home__subtitle}>Street Workout Community</Text>
        </View>
        
        {/* FORM */}
        <AuthForm />
      </ScrollView>
    </SafeAreaView>
  );
}