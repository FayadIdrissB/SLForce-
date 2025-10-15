import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "blue" }, headerTintColor: "white", }}>
      <Stack.Screen name="index" options={{ headerTitle: "" }} />
      <Stack.Screen name="register" options={{ headerTitle: "" }} />
      <Stack.Screen name="login" options={{ headerTitle: "" }} />
    </Stack>
  );
}
