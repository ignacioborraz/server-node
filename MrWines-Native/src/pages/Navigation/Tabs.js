import * as React from 'react';
import SignInScreen from '../signIn';
import SignUpScreen from '../signUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();
export default function UserTabsNavigation() {

    return (

        <Tab.Navigator initialRouteName="UserAccount"
        tabBarOptions={{ 
            activeTintColor: "#000",
            activeBackgroundColor: "#B33030",
            inactiveTintColor: "#FFF",
            inactiveBackgroundColor: "black"
          }}
        >
            <Tab.Screen name="SignIn" component={SignInScreen} 
            options={{
                title: "Sign In",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-person" size={size} color={color} /> 
                ) 
              }}
            />
            <Tab.Screen name="SignUp" component={SignUpScreen} 
            options={{
                title: "Sign Up",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-person" size={size} color={color} /> 
                ) 
              }}
            />
            
        </Tab.Navigator>

    )
}