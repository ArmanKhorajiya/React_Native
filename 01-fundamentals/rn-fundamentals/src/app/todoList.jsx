import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { use, useState } from "react";

export default function ToDo() {
  const [data, setData] = useState("");
  const [a, setA] = useState("");
  const showData = () => {
    setA(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textheading}>To Do List:</Text>

      <TextInput
        placeholder="Enter data..."
        value={data}
        onChangeText={setData}
        style={styles.textInput}
      />

      <Pressable onPress={showData}>
        <Text style={styles.textPressable}>Show</Text>
      </Pressable>

      <Text style={styles.textData}>{a}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "darkred",
  },

  textheading: {
    textAlign: "justify",
    color: "orange",
    fontSize: 50,
  },

  textInput: {
    fontSize: 30,
    backgroundColor: "red",
  },

  textPressable: {
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "green",
  },

  textData: {
    fontSize: 30,
    color: "white",
  },
});
