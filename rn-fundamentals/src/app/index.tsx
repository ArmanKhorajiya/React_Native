import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import { useState } from "react";

interface FormItem {
  name: string;
  email: string;
  pass: string;
}

export default function Prac() {
  const [input, setInput] = useState<FormItem>({
    name: "",
    email: "",
    pass: "",
  });

  const [data, setData] = useState<FormItem[]>([]);
  const [formVisible, setFormVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [submitted, setSubmitted] = useState<FormItem | null>(null);

  const handleSubmit = () => {
    setData([...data, input]);
    setSubmitted(input);
    setInput({ name: "", email: "", pass: "" });

    setFormVisible(false);
    setDetailsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Form</Text>

      <Pressable style={styles.button} onPress={() => setFormVisible(true)}>
        <Text style={styles.buttonText}>Open Form</Text>
      </Pressable>

      <Modal
        visible={formVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFormVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalHeading}>Enter Details</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={input.name}
              onChangeText={(text) => setInput({ ...input, name: text })}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={input.email}
              onChangeText={(text) => setInput({ ...input, email: text })}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={input.pass}
              onChangeText={(text) => setInput({ ...input, pass: text })}
            />

            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>

            <Pressable
              style={styles.cancelButton}
              onPress={() => setFormVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        visible={detailsVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setDetailsVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalHeading}>Submitted Details</Text>

            {submitted && (
              <>
                <Text>Name: {submitted.name}</Text>
                <Text>Email: {submitted.email}</Text>
                <Text>Password: {submitted.pass}</Text>
              </>
            )}

            <Pressable
              style={styles.button}
              onPress={() => setDetailsVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.listHeading}>All Submissions</Text>

      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "orange",
  },
  heading: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  listHeading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
  },
  modalBox: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    gap: 15,
  },
  modalHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: "darkgreen",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: "gray",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    gap: 5,
  },
});
