import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

export default function Demo() {
  const onCLick = () => {
    alert("Clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Practice:</Text>

      <Button
        title="Save"
        onPress={() => {
          console.log("Saved");
          alert("Saved");
        }}
        disabled={false}
        color={"red"}
      />

      <Pressable onPressIn={onCLick} style={styles.pressableButton}>
        <Text style={styles.buttonText}>Pressable Button</Text>
      </Pressable>

      <TouchableOpacity activeOpacity={0.5} onPress={() => alert("Clicked")}>
        <Text style={styles.touchableButton}>Touchable Button</Text>
      </TouchableOpacity>

      <Pressable
        android_ripple={{ color: "#90CAF9" }}
        onPress={() => alert("Clicked")}
      >
        <Text style={styles.buttonText}>Android ripple effect</Text>
      </Pressable>

      <Pressable
        pressRetentionOffset={{
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        }}
        onPress={() => alert("Clicked")}
      >
        <Text style={styles.dragButton}>Drag and release</Text>
      </Pressable>

      <Pressable
        onPressIn={() => alert("Finger down")}
        onPressOut={() => alert("Interaction ended")}
        onPress={() => alert("Successful tap")}
        onLongPress={() => alert("Held")}
        delayLongPress={1000}
      >
        <Text style={styles.holdButton}>Hold Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    marginTop: 50,
  },

  heading: {
    color: "white",
    fontSize: 30,
  },

  pressableButton: {
    // Styles for the Pressable wrapper
  },

  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "red",
    borderRadius: 8,
    padding: 15,
  },

  touchableButton: {
    fontSize: 20,
    color: "white",
    backgroundColor: "red",
    textAlign: "center",
    padding: 15,
  },

  dragButton: {
    backgroundColor: "red",
    padding: 15,
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },

  holdButton: {
    fontSize: 20,
    backgroundColor: "red",
    textAlign: "center",
    padding: 15,
    color: "white",
  },
});
