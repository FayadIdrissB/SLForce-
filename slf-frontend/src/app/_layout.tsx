import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, headerStyle: { backgroundColor: "blue" }, headerTintColor: "white", }}>
      <Stack.Screen name="index" options={{ headerTitle: "bearlift" }} />
      <Stack.Screen name="screens" options={{ headerTitle: "bearlift" }} />
    </Stack>
  );
}
