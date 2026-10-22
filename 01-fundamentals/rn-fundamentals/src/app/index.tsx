
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(false);

  const splashOpacity = useRef(new Animated.Value(1)).current;
  const splashScale = useRef(new Animated.Value(1)).current;
  const counterOpacity = useRef(new Animated.Value(0)).current;
  const counterY = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    const iconTimer = setTimeout(() => {
      setShowSplash(true);
    }, 600);

    const transitionTimer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(splashOpacity, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(splashScale, {
          toValue: 1.06,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(counterOpacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(counterY, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) router.replace("/counter");
      });
    }, 1700);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(transitionTimer);
    };
  }, [
    router,
    splashOpacity,
    splashScale,
    counterOpacity,
    counterY,
  ]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {!showSplash ? (
        <View style={styles.iconScreen}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      ) : (
        <>
          <Animated.View
            style={[
              styles.layer,
              {
                opacity: counterOpacity,
                transform: [{ translateY: counterY }],
              },
            ]}
          >
            <ImageBackground
              source={require("../../assets/images/tabIcons/explore.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.layer,
              {
                opacity: splashOpacity,
                transform: [{ scale: splashScale }],
              },
            ]}
          >
            <ImageBackground
              source={require("../../assets/images/splash-icon.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </Animated.View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001D13",
    overflow: "hidden",
  },
  iconScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003B29",
  },
  icon: {
    width: 180,
    height: 180,
    borderRadius: 36,
  },
  layer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  image: {
    flex: 1,
  },
});
