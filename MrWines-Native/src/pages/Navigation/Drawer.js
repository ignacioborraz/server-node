import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from '../Home';
import ShopStackNavigation from './Stack';
import UserTabsNavigation from './Tabs'
import Basket from "../Basket"
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image, Dimensions} from "react-native"
import MenuButtonItem from '../componentes/MenuButtonItem';




const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (

        <Drawer.Navigator initialRouteName="Home"
        style = {{backgroundColor: "black"}}
        drawerContent = {(props) => <MenuItems {...props}/>}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Shop" component={ShopStackNavigation} />
            <Drawer.Screen name="User" component={UserTabsNavigation} /> 
            <Drawer.Screen name="Basket" component={Basket} /> 
        </Drawer.Navigator>

    );
} 

const MenuItems =({navigation}) =>{

    return (
<DrawerContentScrollView
 style = {styles.container}
>
   

<Text style = {styles.title}>Mr. Wines</Text>
<Text style ={{marginTop: 4, marginBottom: 10, color: "white", fontWeight: "bold"}}>Items</Text>
<MenuButtonItem
text = "Home"
image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwskBg1sy531I-9_FAVXyfBbm4yCkS3bEmIA&usqp=CAU"
onPress = {()=> navigation.navigate("Home")}
/>
<MenuButtonItem
text = "Shop"
image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfkKSdwYzm36zZUynyIm5PKapFy2mgtqQYg&usqp=CAU"
onPress = {()=> navigation.navigate("Shop")}
/>
<MenuButtonItem
text = "User"
image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96cZvULb2zGQ5Cpsa872oGd8rOCP3cEjrwg&usqp=CAU"
onPress = {()=> navigation.navigate("User")}
/>
<MenuButtonItem
text = "Basket"
image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6_8tom3xXTp9S2PkkNjeRSSZqmUWplAP-A&usqp=CAU"
onPress = {()=> navigation.navigate("Basket")}
/>


</DrawerContentScrollView>

    )
}

const styles = StyleSheet.create({

container: {
    padding: 15,
    backgroundColor: "black",
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white",
}


})