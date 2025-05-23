import { View, Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { theme } from "../theme";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    name: string;
    isCompleted?: boolean;
}

export function ShoppingListItem({name, isCompleted = false}: Props) {
    const handleDelete = () => {
        Alert.alert("Delete", `Are you sure you want to delete ${name}?`, [
          { text: "No", onPress: () => console.log("No Pressed") },
          { text: "Yes", onPress: () => console.log("Yes Pressed") },
        ]);
      }

    // return (
    //   <View style = {{alignItems: "center", marginBottom: 20}}>
    //       <View style={[styles.itemContainer, isCompleted? styles.completedItemContainer : undefined]}>
    //           <Text style={isCompleted? styles.completedText : undefined}>{name}</Text>
    //       </View>
    //       <TouchableOpacity onPress={handleDelete} 
    //       // style={[styles.button, isCompleted? styles.completedButton : undefined]} 
    //       activeOpacity={0.8} disabled={isCompleted}>
    //           {/* <Text style={[styles.buttonText]}>Delete</Text> */}
    //           <AntDesign name="closecircle" size={24} color={isCompleted? "grey" : "red"} />
    //       </TouchableOpacity>
    //   </View>
    // );
    return (
      <View style={[styles.itemContainer, isCompleted ? styles.completedItemContainer : undefined]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text style={[isCompleted ? styles.completedText : undefined,]}>
              {name}
            </Text>
            <TouchableOpacity onPress={handleDelete} activeOpacity={0.8} disabled={isCompleted}>
              <AntDesign name="closecircle" size={18} color={isCompleted ? "grey" : "red"}/>
            </TouchableOpacity>
        </View>
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
    itemContainer: {
      backgroundColor: "pink", 
      padding: 10, 
      borderBottomColor: theme.colorCerulean, 
      borderBottomWidth: 2,
      marginBottom: 20,
      width: 250,
    },
    completedItemContainer: {
      backgroundColor: theme.colorLightGrey, 
    },
    button: {
      backgroundColor: theme.colorCerulean,
      padding: 8,
      borderRadius: 6,
      width: 80
    },
    completedButton: {
      backgroundColor: theme.colorGrey,
    },
    completedText: {
      textDecorationLine: "line-through",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
  });
  