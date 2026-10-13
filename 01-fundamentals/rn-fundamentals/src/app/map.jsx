import { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

export default function () {
  const [a, setA] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";
  const data = fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setA(data);
    })
    .catch((error) => console.log(error));

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        marginTop: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Fetch API using .then():-
      </Text>
      <FlatList
        data={a}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text
            style={{
              color: "purple",
              fontSize: 20,
              fontStyle:"italic"
            }}
          >
            {item.id}
          </Text>
        )}
      />
    </View>
  );
}
