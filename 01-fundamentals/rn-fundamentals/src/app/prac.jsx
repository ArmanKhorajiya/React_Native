import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default function Prac() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [n, setN] = useState("");
  const [e, setE] = useState("");
  const [m, setM] = useState("");
  const handleSubmit = () => {
    setN(name);
    setE(email);
    setM(mobileNo);
  };

  return (
    <View style={styles.container}>
      <Text>Form:</Text>
      <TextInput onChange={setName} value={name} placeholder="Name" />
      <TextInput onChange={setEmail} value={email} placeholder="Email" />
      <TextInput
        onChange={setMobileNo}
        value={mobileNo}
        placeholder="Mobile No"
      />
      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>
      <Text>{n}</Text>
      <Text>{e}</Text>
      <Text>{m}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
    backgroundColor: "orange",
  },
  heading: {
    fontSize: 50,
    color: "white",
  },
});
