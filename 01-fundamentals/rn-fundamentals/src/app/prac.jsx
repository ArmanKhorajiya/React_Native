import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { use, useState } from "react";

export default function Demo() {
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
      <Text style={styles.heading}>Enter Details:</Text>
      <View style={styles.row}>
        <Text style={styles.textnem}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.inputBox}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.textnem}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.inputBox}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.textnem}>Mobile No:</Text>
        <TextInput
          value={mobileNo}
          onChangeText={setMobileNo}
          style={styles.inputBox}
        />
      </View>

      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: pressed ? "red" : "green",
          },
        ]}
      >
        <Text style={styles.btntext}>Submit</Text>
      </Pressable>

      <View style={styles.showData}>
        <Text style={styles.showDatatext}>Name: {n}</Text>
        <Text style={styles.showDatatext}>Email: {e}</Text>
        <Text style={styles.showDatatext}>Mobile No: {m}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
  heading,
});
