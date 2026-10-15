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
        placeholder="Name" value={name} onChangeText={setName} style={{color:"white",fontSize:50}}
      />
      <TextInput
        placeholder="Email:"
        value={email}
        onChangeText={setEmail}
        style={styles.textemail}
      />
      <TextInput
        placeholder="Name:"
        value={mobileNo}
        onChangeText={setMobileNo}
        style={styles.textmobileno}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "black",
    gap: 30,
    marginTop: 30,
  },
  textheading: {
    textAlign: "left",
    justifyContent: "flex-start",
    color: "white",
    fontSize: 40,
    marginLeft: 5,
    marginTop: 50,
    fontWeight: "medium",
    fontStyle: "italic",
  },
  textname: {
    color: "white",
    fontSize: 25,
    alignContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  //   inputname: {
  //     borderRadius: 2,
  //     borderColor: "white",
  //   },
});
