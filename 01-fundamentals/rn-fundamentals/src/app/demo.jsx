import { useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function Demo() {
  const [a, setA] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";
  const abc = async () => {
    let res = await fetch(api);
    let data = await res.json();
    setA(data);
  };
  abc();
  
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "darkred",
        marginTop: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Fetch API using Async:-
      </Text>
      <FlatList
        data={a}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontStyle: "italic",
            }}
          >
            {item.id}
          </Text>
        )}
      />
    </View>
  );
}
