
import { StatusBar, StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text style={styles.title}>Hello 👋</Text>
      <Text style={styles.subtitle}>
        Welcome to my app!
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/counter")}
      >
        <Text style={styles.buttonText}>Go to Counter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003B29",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#D1FAE5",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#10B981",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
