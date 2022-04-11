import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/pages/Home"
import Shop from "./src/pages/Shop"
import SignIn from "./src/pages/signIn"
import SignUp from "./src/pages/signUp"

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "black" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sign IN"
        component={SignIn}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sign up"
        component={SignUp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
