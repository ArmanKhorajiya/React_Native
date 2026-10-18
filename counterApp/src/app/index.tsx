import { useEffect, useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(true);
    }, 1500);

    const counterTimer = setTimeout(() => {
      router.replace("/counter");
    }, 4000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(counterTimer);
    };
  }, [router]);

  if (!showSplash) {
    return (
      <View style={styles.iconScreen}>
        <StatusBar hidden />
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    );
  }

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
  iconScreen: {
    flex: 1,
    backgroundColor: "#003B29",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 180,
    height: 180,
    borderRadius: 36,
  },
  background: {
    flex: 1,
    backgroundColor: "#003B29",
  },
});
