
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Pressable style={styles.container} onPress={increment}>
      <StatusBar
        backgroundColor="#063D24"
        barStyle="light-content"
      />

      {/* Heading */}
      <View style={styles.header} pointerEvents="none">
        <Text style={styles.heading}>Tasbih Counter</Text>
        <Text style={styles.subtitle}>بِسْمِ اللَّهِ</Text>
      </View>

      {/* Counter */}
      <View style={styles.counterArea} pointerEvents="none">
        <View style={styles.counterCircle}>
          <Text style={styles.count}>{count}</Text>
        </View>

        <Text style={styles.hint}>TAP ANYWHERE TO COUNT</Text>
      </View>

      {/* Reset button */}
      <Pressable
        style={({ pressed }) => [
          styles.resetButton,
          pressed && styles.resetPressed,
        ]}
        onPress={(event) => {
          event.stopPropagation();
          reset();
        }}
      >
        <Text style={styles.resetText}>↻  Reset Counter</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#064E2B",
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 35,
  },

  header: {
    alignItems: "center",
  },

  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#F4D58D",
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 22,
    color: "#D5B96A",
    marginTop: 12,
  },

  counterArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  counterCircle: {
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "#0A6037",
    borderWidth: 3,
    borderColor: "#C9A85B",
    justifyContent: "center",
    alignItems: "center",

    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },

  count: {
    fontSize: 76,
    fontWeight: "600",
    color: "#FFFFFF",
    fontVariant: ["tabular-nums"],
  },

  hint: {
    fontSize: 12,
    fontWeight: "600",
    color: "#C5DCCB",
    letterSpacing: 3,
    marginTop: 30,
  },

  resetButton: {
    alignSelf: "center",
    backgroundColor: "#123D2A",
    borderWidth: 1,
    borderColor: "#C9A85B",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },

  resetPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.96 }],
  },

  resetText: {
    color: "#F4D58D",
    fontSize: 16,
    fontWeight: "600",
  },
});
