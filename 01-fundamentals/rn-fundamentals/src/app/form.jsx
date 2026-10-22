import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function Prac() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    setData([...data, input]);
    setInput({
      name: "",
      email: "",
      pass: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Form</Text>
      <TextInput
        onChangeText={(ele) => setInput({ ...input, name: ele })}
        value={input.name}
        placeholder="Name"
      />
      <TextInput
        onChangeText={(ele) => setInput({ ...input, email: ele })}
        value={input.email}
        placeholder="Email"
      />
      <TextInput
        onChangeText={(ele) => setInput({ ...input, pass: ele })}
        value={input.pass}
        placeholder="Password"
      />

      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.pass}</Text>
          </View>
        )}
      />
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


