import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // Hides the default white navigation header bar
        headerShown: false, 
        // Forces the parent container view to match your dark green aesthetic
        contentStyle: { backgroundColor: "#003B29" }, 
      }}
    />
  );
}
