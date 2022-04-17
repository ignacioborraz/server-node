import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetalleScreen from '../Detail';
// import CommentsScreen from '../Screens/commentsScreen';
import ShopScreen from '../Shop';


const Stack = createStackNavigator();
export default function ShopStackNavigation() {

    return (

        <Stack.Navigator initialRouteName="Shop"
            screenOptions={{ headerBackTitle: "Back" }}
        >
            <Stack.Screen name="Shop" component={ShopScreen}
                options={{ headerShown: false, }} />
            <Stack.Screen name="Detail" component={DetalleScreen} />
            {/* <Stack.Screen name="Comments" component={CommentsScreen} options={({ navigation, route }) => ({
                headerTitle: "Comments"
            })} /> */}
        </Stack.Navigator>

    )
}