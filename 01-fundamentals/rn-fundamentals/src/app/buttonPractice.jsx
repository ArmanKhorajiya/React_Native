// // import { useState } from "react";
// // import {
// //   Button,
// //   Pressable,
// //   TouchableOpacity,
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// // } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";

// // export default function ButtonPractice() {
// //   const onButton = () => {
// //     alert("Button Clicked");
// //   };
// //   const onPressable = () => {
// //     alert("Pressable Clicked");
// //   };
// //   const onTouchable = () => {
// //     alert("Touchable Clicked");
// //   };

// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         justifyContent: "center",
// //       }}
// //     >
// //       <Text
// //         style={{
// //           fontSize: 35,
// //           color: "white",
// //           textAlign: "center",
// //         }}
// //       >
// //         Buttons Example:
// //       </Text>

// //       <TextInput placeholder="Enter Name" style={{color:"white" }}>Enter Name </TextInput>

// //       <Button title="Button" onPress={onButton} />

// //       <Pressable onPress={onPressable}>
// //         <Text style={styles.textpressable}>Pressable</Text>
// //       </Pressable>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   view: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     alignContent: "center",
// //     color: "white",
// //     marginTop: 50,
// //   },
// //   textpressable: {
// //     color: "white",
// //     fontSize: 20,
// //     backgroundColor: "green",
// //     textAlign: "center",
// //     marginTop: 20,
// //     width: 360,
// //   },
// // });

// import { useState } from "react";
// import { View, Text, TextInput } from "react-native";

// export default function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <View
//       style={{
//         padding: 20,
//         gap: 12,
//         backgroundColor: "white",
//         flex: 1,
//         justifyContent: "center",
//       }}
//     >
//       <TextInput
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//         autoCapitalize="words"
//         style={{ borderWidth: 1, padding: 10 }}
//       />

//       <TextInput
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCorrect={false}
//         style={{ borderWidth: 1, padding: 10 }}
//       />

//       <Text>Name: {name}</Text>
//       <Text>Email: {email}</Text>
//     </View>
//   );
// }

import { View, Text, SectionList, StyleSheet, Image } from "react-native";

const DATA = [
  {
    title: "Fruits",
    data: ["Apple", "Banana", "Mango", "Orange", "Grapes"],
  },
  {
    title: "Vegetables",
    data: ["Potato", "Tomato", "Onion", "Carrot", "Cabbage"],
  },
  {
    title: "Drinks",
    data: ["Water", "Milk", "Juice", "Coffee", "Tea"],
  },
];

export default function Practice() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}></Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPf_062JKWOBQr9rKxfyjLtlwzCn6Wwx_fJ6vQDIAgQ&s=10",
        }}
        style={{ width: "auto", height: 200, resizeMode: "contain" }}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },
  header: {
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 12,
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
