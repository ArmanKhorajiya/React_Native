import { Button, Pressable, TouchableOpacity, View, Text } from "react-native";
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
    <SafeAreaView>
      <Text></Text>
    </SafeAreaView>
  );
}
