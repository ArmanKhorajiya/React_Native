import {
  ScrollView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
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

      <Pressable onPressIn={onCLick}>
        <Text style={styles.buttonText}>Pressable Button</Text>
      </Pressable>

      <TouchableOpacity activeOpacity={0.5} onPress={() => alert("Clicked")}>
        <Text style={styles.touchableButton}>Touchable Button</Text>
      </TouchableOpacity>

      <Pressable
        android_ripple={{
          color: "#90CAF9",
          // borderless: false,
          // foreground: true,
        }}
        onPress={() => alert("Clicked")}
        style={{
          backgroundColor: "red",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
            padding: 15,
          }}
        >
          Android ripple effect
        </Text>
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

      <Image
        source={require("../../assets/images/rain.jpg")}
        style={{ width: 350, height: 200, resizeMode: "contain" }}
      />
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
