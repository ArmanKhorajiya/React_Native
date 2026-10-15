import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedMobile, setSubmittedMobile] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedMobile(mobileNo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Details</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          placeholder="Enter name"
          placeholderTextColor="gray"
          value={name}
          onChangeText={setName}
          style={styles.input}
          autoComplete="off"
          importantForAutofill="no"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="Enter email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="off"
          importantForAutofill="no"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mobile:</Text>
        <TextInput
          placeholder="Enter mobile number"
          placeholderTextColor="gray"
          value={mobileNo}
          onChangeText={setMobileNo}
          style={styles.input}
          keyboardType="phone-pad"
          autoComplete="off"
          importantForAutofill="no"
        />
      </View>

      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [
          styles.btn,
          { backgroundColor: pressed ? "red" : "green" },
        ]}
      >
        <Text style={styles.btnText}>Submit</Text>
      </Pressable>

      <Text style={styles.showDataHeading}>Entered Details Are:</Text>

      <View style={styles.showDataContainer}>
        <Text style={styles.showData}>Name: {submittedName}</Text>
        <Text style={styles.showData}>Email: {submittedEmail}</Text>
        <Text style={styles.showData}>Mobile: {submittedMobile}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    gap: 20,
    padding: 20,
  },

  heading: {
    color: "white",
    fontSize: 28,
    marginTop: 40,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  label: {
    color: "white",
    fontSize: 18,
    width: 80,
  },

  input: {
    flex: 1,
    minWidth: 0,
    padding: 10,
    color: "white",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },

  btn: {
    width: 120,
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },

  showDataHeading: {
    color: "white",
    fontSize: 22,
    marginTop: 10,
  },

  showDataContainer: {
    gap: 10,
  },

  showData: {
    color: "gray",
    fontSize: 16,
    flexShrink: 1,
  },
});
