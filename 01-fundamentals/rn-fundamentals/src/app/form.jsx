import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const handleDate = () => {
    setName(name);
    setEmail(email);
    setMobileNo(mobileNo);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.textheading}>Enter Your Details</Text>
      <TextInput
        placeholder="Name:"
        value={name}
        onChangeText={setName}
        style={styles.textinputname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "darkgreen",
    gap: 30,
    marginTop: 30,
  },
  textheading: {
    textAlign: "left",
    color: "white",
    fontSize: 40,
    marginLeft: 5,
    marginTop: 50,
    fontWeight: "medium",
  },
  textinputname: {
    fontSize: 20,
  },
});
