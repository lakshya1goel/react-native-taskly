import { Link, Stack } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:"Counter", headerRight: () => {
                return <Link href="/counter/history">
                    <FontAwesome5 name="history" size={24} color="black" />
                </Link>
            }}}/>
        </Stack>
    );
}