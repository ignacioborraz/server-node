import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  ProgressViewIOSComponent,
} from "react-native";
import CardWineShop from "./componentes/cardWineShop"
import {connect} from "react-redux";
import wineActions from "./redux/actions/wineActions";


var { height } = Dimensions.get("window");

export default function Shop() {
  const [range,setRange] = useState("")
  const [search,setSearch] = useState("")

  const types =['Red','White','Rosé','Sparkling']

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(wineActions.getWines())
  },[])

  const wines = useSelector(store => store.wineReducer.wines).sort(((a, b) => a.nameWine - b.nameWine))
  //console.log(wines)


  return (
   
      <ImageBackground
        style={styles.customImg2}
        source={require("../../assets/tablas.jpg")}
      >
         <ScrollView>
        <View style={styles.customImg} >
        <View style={styles.view1}>
          <Text style={styles.text1}>Choose your wine</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text2}>Search:</Text>
          <TextInput  onChangeText={event => setSearch(event)} required style={styles.customInput} />
        </View>
        <View>
        <CardWineShop wines={wines} search={search}/>
        </View>
        </View>
        </ScrollView>
      </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  view1: {
    height: 70,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  customImg: {
    height: "100%",
  },
  customImg2: {
    height: "100%",
  },
  text1: {
    fontSize: 40,
    textShadowColor: "#333",
    textShadowRadius: 10,
    color: "red",
    fontWeight: "bold",
  },
  customInput: {
    // borderWidth: 1,
    // borderColor: "black",
    width: 200,
    height: 35,
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: 'center',
  },
  containerInput: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%'
  },
  text2: {
    fontSize: 15,
    color: "white",
    marginTop: 15
  },
});