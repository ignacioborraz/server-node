import React from "react";
import DrawerNavigator from "./src/pages/Navigation/Drawer";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './src/pages/redux/reducers/mainReducer'
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {

  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (
    <Provider store={reduxStore}>
    <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
      <View style={styles.text}> 
        <Text style={styles.text1}>  mrwines@company.com </Text>
        <Text style={styles.text1}>San Martín 3230  (011) 15-44396205</Text>
        <Text style={styles.text1}>2022 Copyright @</Text>

    </View>
    </Provider>
  );

}
const styles = StyleSheet.create({
  text: {
    width: "100%",
    color: "white",
    // lineHeight: 84,
    height: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    
  },
  
  text1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
},
});