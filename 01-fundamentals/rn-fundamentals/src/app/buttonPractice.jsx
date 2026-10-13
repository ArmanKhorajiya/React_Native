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
    <SafeAreaView style={styles.safeareaview}>
      <Text style={styles.textsafeareaview}>Buttons Example</Text>
      <View style={styles.view}>
        <Button title="Button" onPress={onButton} />
      </View>
      <View style={styles.view}>
        <Pressable onPress={onPressable}>
          <Text style={styles.textpressable}>Pressable</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: "auto",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: "white",
    marginTop: 50,
  },
  textsafeareaview: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    gap: 50,
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
