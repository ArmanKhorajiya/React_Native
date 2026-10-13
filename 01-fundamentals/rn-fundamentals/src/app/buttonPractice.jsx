import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View
      style={{
        padding: 20,
        gap: 12,
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        style={{ borderWidth: 1, padding: 10 }}
      />

      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={{ borderWidth: 1, padding: 10 }}
      />

      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
}
