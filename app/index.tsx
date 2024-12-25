import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable, Alert } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={[StyleSheet.absoluteFill, {backgroundColor: "yellow"}]}/> */}
      <View style={{ backgroundColor: "yellow", ...StyleSheet.absoluteFillObject }} />
      <Link href="/counter" style={{textAlign: "center", marginBottom: 18, fontSize: 24}}> Go to counter </Link>
      <ShoppingListItem name="hi" />
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
