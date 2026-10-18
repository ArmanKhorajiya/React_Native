
// import { useState } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   StyleSheet,
//   StatusBar,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="#032B19"
//       />

//       {/* Full-screen counting area */}
//       <Pressable
//         style={StyleSheet.absoluteFill}
//         onPress={() => setCount((prev) => prev + 1)}
//       />

//       {/* Header */}
//       <View style={styles.header} pointerEvents="none">
//         <Text style={styles.heading}>Tasbih Counter</Text>
//         <Text style={styles.decoration}>━━━━ ✦ ━━━━</Text>
//       </View>

//       {/* Main counter */}
//       <View style={styles.counterArea} pointerEvents="none">
//         <View style={styles.counterCircle}>
//           <Text style={styles.count}>
//             {count}
//           </Text>
//         </View>

//         <Text style={styles.hint}>
//           TAP ANYWHERE TO COUNT
//         </Text>
//       </View>

//       {/* Reset stays separate from the counting area */}
//       <View style={styles.footer}>
//         <Pressable
//           style={({ pressed }) => [
//             styles.resetButton,
//             pressed && styles.pressed,
//           ]}
//           onPress={() => setCount(0)}
//         >
//           <Text style={styles.resetText}>
//             ↻  Reset Counter
//           </Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#032B19",
//     paddingHorizontal: 24,
//     paddingTop: 30,
//     paddingBottom: 20,
//   },

//   header: {
//     alignItems: "center",
//     marginTop: 24,
//   },

//   heading: {
//     color: "#F4D58D",
//     fontSize: 30,
//     fontWeight: "700",
//     textAlign: "center",
//   },

//   decoration: {
//     color: "#D4AF55",
//     fontSize: 17,
//     marginTop: 12,
//   },

//   counterArea: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   counterCircle: {
//     width: 230,
//     height: 230,
//     borderRadius: 115,
//     borderWidth: 4,
//     borderColor: "#DDB85A",
//     backgroundColor: "#06452B",
//     justifyContent: "center",
//     alignItems: "center",

//     elevation: 12,
//     shadowColor: "#DDB85A",
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 0.2,
//     shadowRadius: 16,
//   },

//   count: {
//     color: "#FFFFFF",
//     fontSize: 76,
//     fontWeight: "600",
//     fontVariant: ["tabular-nums"],
//   },

//   hint: {
//     color: "#D2DCCF",
//     fontSize: 12,
//     fontWeight: "600",
//     letterSpacing: 3,
//     marginTop: 34,
//   },

//   footer: {
//     alignItems: "center",
//     paddingTop: 12,
//     paddingBottom: 20,
//   },

//   resetButton: {
//     minWidth: 190,
//     alignItems: "center",
//     borderWidth: 1.5,
//     borderColor: "#DDB85A",
//     borderRadius: 32,
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//   },

//   pressed: {
//     opacity: 0.6,
//   },

//   resetText: {
//     color: "#F4D58D",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });


import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#032B19"
      />

      {/* Full-screen counting area */}
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={() => setCount((prev) => prev + 1)}
      />

      {/* Header */}
      <View style={styles.header} pointerEvents="none">
        <Text style={styles.heading}>Tasbih Counter</Text>
        <Text style={styles.decoration}>━━━━ ✦ ━━━━</Text>
      </View>

      {/* Main counter */}
      <View style={styles.counterArea} pointerEvents="none">
        <View style={styles.counterCircle}>
          <Text style={styles.count}>
            {count}
          </Text>
        </View>

        <Text style={styles.hint}>
          TAP ANYWHERE TO COUNT
        </Text>
      </View>

      {/* Reset stays separate from the counting area */}
      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.pressed,
          ]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.resetText}>
            ↻  Reset Counter
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#032B19",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 24,
  },

  heading: {
    color: "#F4D58D",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },

  decoration: {
    color: "#D4AF55",
    fontSize: 17,
    marginTop: 12,
  },

  counterArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  counterCircle: {
    width: 230,
    height: 230,
    borderRadius: 115,
    borderWidth: 4,
    borderColor: "#DDB85A",
    backgroundColor: "#06452B",
    justifyContent: "center",
    alignItems: "center",

    elevation: 12,
    shadowColor: "#DDB85A",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },

  count: {
    color: "#FFFFFF",
    fontSize: 76,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
  },

  hint: {
    color: "#D2DCCF",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 3,
    marginTop: 34,
  },

  footer: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 20,
  },

  resetButton: {
    minWidth: 190,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#DDB85A",
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },

  pressed: {
    opacity: 0.6,
  },

  resetText: {
    color: "#F4D58D",
    fontSize: 16,
    fontWeight: "600",
  },
});
