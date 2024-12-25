import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable, Alert} from "react-native";
import { ShoppingListItem } from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={[StyleSheet.absoluteFill, {backgroundColor: "yellow"}]}/> */}
      <View style={{backgroundColor: "yellow", ...StyleSheet.absoluteFillObject}}/>
      <ShoppingListItem name="hi"/>
      <ShoppingListItem name="bye" isCompleted={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
