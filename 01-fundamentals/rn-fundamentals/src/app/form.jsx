import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const handleSubmit = () => {
    setName(name);
    setEmail(email);
    setMobileNo(mobileNo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Details</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          placeholder="Name:"
          placeholderTextColor={"gray"}
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholderTextColor={"gray"}
          placeholder="Email:"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mobile:</Text>
        <TextInput
          placeholder="Mobile No"
          placeholderTextColor={"gray"}
          value={mobileNo}
          onChangeText={setMobileNo}
          style={styles.input}
        />
      </View>
      <Pressable onPressIn={handleSubmit} style={styles.btn}>Submit</Pressable>
      <Text style={styles.showdataheading}>Entered Details Are:</Text>
      <View style={styles.showData}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    gap: 20,
    padding: 30,
  },
  heading: {
    color: "white",
    fontSize: 30,
    marginTop: 40,
  },
  label: {
    color: "white",
    fontSize: 20,
    width: 80,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    borderRadius: 1,
    borderColor: "white",
    flex: 1,
    padding: 10,
    color: "white",
    borderWidth: 1,
  },
  showData: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  showdataheading: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
  },
  btn:{
    backgroundColor:"blue",
    color:"white"
  }
});
