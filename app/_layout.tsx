// Using modal and Stack
// import { Stack } from "expo-router";

// export default function Layout (){
//     return (
//         <Stack>
//             <Stack.Screen name="index" options={{title:"Shopping List"}} />
//             <Stack.Screen name="counter" options={{title:"Counter", presentation:"modal", animation:"slide_from_bottom"}} />
//             <Stack.Screen name="idea" options={{title:"Idea"}} />
//         </Stack>
//     )
// }

import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { theme } from "../theme";

export default function Layout (){
    return (
        <Tabs screenOptions={{tabBarActiveTintColor:theme.colorCerulean}}>
            <Tabs.Screen name="index" options={{title:"Shopping List", tabBarIcon: ({color, size}) =>{return <Feather name="list" size={size} color={color} />}}} />
            <Tabs.Screen name="counter" options={{title:"Counter", headerShown:false, tabBarIcon: ({color, size}) => {return <AntDesign name="clockcircleo" size={size} color={color} />}}} />
            <Tabs.Screen name="idea" options={{title:"Idea", tabBarIcon: ({color, size}) => {return <FontAwesome5 name="lightbulb" size={size} color={color} />}}} />
        </Tabs>
    )
}