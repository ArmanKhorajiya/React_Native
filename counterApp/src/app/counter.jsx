
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <ImageBackground
      source={require("../../assets/images/counter-bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="#03180F" />

      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        {/* Dark overlay keeps the counter readable */}
        <View style={styles.overlay} pointerEvents="none" />

        {/* Tap anywhere to count */}
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setCount((prev) => prev + 1)}
        />

        <View style={styles.header} pointerEvents="none">
          <Text style={styles.heading}>Tasbih Counter</Text>
          <Text style={styles.decoration}>━━━━ ✦ ━━━━</Text>
        </View>

        <View style={styles.counterArea} pointerEvents="none">
          <View style={styles.counterCircle}>
            <Text style={styles.count}>{count}</Text>
          </View>

          <Text style={styles.hint}>TAP ANYWHERE TO COUNT</Text>
        </View>

        <View style={styles.footer}>
          <Pressable
            style={({ pressed }) => [
              styles.resetButton,
              pressed && styles.pressed,
            ]}
            onPress={() => setCount(0)}
          >
            <Text style={styles.resetText}>↻  Reset Counter</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#03180F",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 12, 7, 0.18)",
  },
  header: {
    alignItems: "center",
    marginTop: 24,
  },
  heading: {
    color: "#F4D58D",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
  decoration: {
    color: "#D4AF55",
    fontSize: 17,
    marginTop: 12,
  },
  counterArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  counterCircle: {
    width: 210,
    height: 210,
    borderRadius: 105,
    borderWidth: 3,
    borderColor: "#DDB85A",
    backgroundColor: "rgba(0, 35, 22, 0.88)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#DDB85A",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
  },
  count: {
    color: "#FFFFFF",
    fontSize: 72,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
  },
  hint: {
    color: "#E4DCC8",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 2,
    marginTop: 28,
  },
  footer: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 16,
  },
  resetButton: {
    minWidth: 180,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#DDB85A",
    borderRadius: 32,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "rgba(0, 30, 18, 0.85)",
  },
  pressed: {
    opacity: 0.6,
  },
  resetText: {
    color: "#F4D58D",
    fontSize: 15,
    fontWeight: "600",
  },
});
