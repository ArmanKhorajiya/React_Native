import { useEffect } from "react";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/counter");
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/images/splash-icon.png")}
        style={styles.background}
        resizeMode="cover"
      />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#003B29",
  },
});
