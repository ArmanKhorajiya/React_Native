import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Demo() {
  const onCLick = () => {
    alert("Clicked");
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        marginTop: 50,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
        }}
      >
        Practice:
      </Text>

      <Button
        title="Save"
        onPress={() => {
          console.log("Saved");
          alert("Saved");
        }}
        disabled={false}
      />

      <Pressable onPressIn={onCLick} style={{}}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
            backgroundColor: "red",
            borderRadius: 8,
            alignItems: "center",
            padding: 15,
          }}
        >
          Pressable Button
        </Text>
      </Pressable>

      <TouchableOpacity activeOpacity={0.5} onPress={() => alert("Clicked")}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            backgroundColor: "red",
            textAlign: "center",
            padding: 15,
          }}
        >
          Touchable Button
        </Text>
      </TouchableOpacity>

      <Pressable
        android_ripple={{ color: "#90CAF9" }}
        onPress={() => alert("Clicked")}
        style={{
          backgroundColor: "#1565C0",
          padding: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
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
        <Text
          style={{
            backgroundColor: "red",
            padding: 15,
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          Drag and release
        </Text>
      </Pressable>

      <Pressable
        onPressIn={() => alert("Finger down")}
        onPressOut={() => alert("Interaction ended")}
        onPress={() => alert("Successful tap")}
        onLongPress={() => alert("Held")}
        delayLongPress={1000}
      >
        <Text
          style={{
            fontSize: 20,
            backgroundColor: "red",
            textAlign: "center",
            padding: 15,
            color: "white",
          }}
        >
          Hold Me
        </Text>
      </Pressable>
    </View>
  );
}
