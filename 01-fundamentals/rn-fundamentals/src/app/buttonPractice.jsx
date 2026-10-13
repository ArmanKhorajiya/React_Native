import {
  Button,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ButtonPractice() {
  const onButton = () => {
    alert("Button Clicked");
  };
  const onPressable = () => {
    alert("Pressable Clicked");
  };
  const onTouchable = () => {
    alert("Touchable Clicked");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          color: "white",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Buttons Example:
      </Text>

      <Button title="Button" onPress={onButton} />

      <Pressable onPress={onPressable}>
        <Text style={styles.textpressable}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: "white",
    marginTop: 50,
  },
  textpressable: {
    color: "white",
    fontSize: 20,
    backgroundColor: "green",
    textAlign: "center",
    marginTop: 20,
    width: 300,
  },
});
