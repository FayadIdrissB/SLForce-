import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ headerTitle: "Bearlift" }} />
        <Stack.Screen name="screens" options={{ headerTitle: "Bearlift" }} />
        <Stack.Screen name="security" options={{ headerTitle: "Securité" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
