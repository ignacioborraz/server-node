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
    <ScrollView >
      <ImageBackground
        style={styles.customImg2}
        source={require("../../assets/tablas.jpg")}
      >
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
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view1: {
    height: 90,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  customImg: {
    height: "auto",
  },
  customImg2: {
    height: "auto",
  },
  text1: {
    fontSize: 35,
    textShadowColor: "black",
    textShadowRadius: 10,
    textShadowRadius: 3,
    color: "red",
    fontWeight: "bold",
  },
  customInput: {
    borderWidth: 1,
    borderColor: "black",
    width: 150,
    backgroundColor: "white",
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    color: "black"
  },
  containerInput: {
    justifyContent: "center",
    marginLeft: 10
  },
  text2: {
    fontSize: 15,
    color: "white",
    marginTop: 10
  },
});
