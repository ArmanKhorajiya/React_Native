
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { requireOptionalNativeModule } from "expo";

const DevMenuPreferences =
  requireOptionalNativeModule("DevMenuPreferences");

export default function RootLayout() {
  useEffect(() => {
    DevMenuPreferences?.setPreferencesAsync?.({
      showFloatingActionButton: false,
    });
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </>
  );
}
