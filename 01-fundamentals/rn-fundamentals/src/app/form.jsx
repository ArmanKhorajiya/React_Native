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
  const [n, setN] = useState("");
  const [e, setE] = useState("");
  const [m, setM] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const obj = {
      name: n,
      email: e,
      mobileNo: m,
    };
    setData([...data, obj]);
    setN("");
    setE("");
    setM("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Form</Text>
      <TextInput onChangeText={setN} value={n} placeholder="Name" />
      <TextInput onChangeText={setE} value={e} placeholder="Email" />
      <TextInput onChangeText={setM} value={m} placeholder="Mobile No" />

      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>

      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.mobileNo}</Text>
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
