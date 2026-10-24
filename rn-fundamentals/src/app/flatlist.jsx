import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";

const arr = [
  { id: 1, name: "Arman" },
  { id: 2, name: "Nazil" },
];

export default function Demo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Practice Code</Text>
      <FlatList
        data={arr}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.data}>{item.id}</Text>}
      />
    </View>
  );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        
    }
})