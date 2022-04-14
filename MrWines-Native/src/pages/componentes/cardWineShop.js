import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, } from "react-native";
import wineActions from "../redux/actions/wineActions";
import {useDispatch, useSelector} from 'react-redux'
import Home from '../../../Navigation'



export default function CardWineShop(props) {
  console.log(props)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(wineActions.filterWines(props.search))
  },[props.search])

  const filterFromRedux = useSelector(store => store.wineReducer.filter).sort(((a, b) => a.nameWine - b.nameWine))
  console.log(filterFromRedux)
  
  let data = props.search ? filterFromRedux : props.wines
  //console.log(data)

  return (
    <>
    <ScrollView>
    {data.length>0 ?(
            data.map(everyWine => (
              
                <TouchableOpacity key={everyWine._id} style={styles.container} 
                onPress={() => navigation.navigate(Home)} >  
                    <Image source={{ uri: everyWine.photo }} style={styles.image} />
                    <Text style={styles.text}>{everyWine.nameWine}</Text>
                    <Text style={styles.text2}>$ {everyWine.price}</Text>
                    

                </TouchableOpacity> 
            
            ))
            ) : (
                <Text style={styles.texto}>No matches with your search. Please try again. Or contact us to give you a solution.</Text>
              )}
  </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
      position: "relative",
      width: "100%",
      height: 250,
      marginBottom: 10,

  },
  image: {
      width: "100%",
      height: "100%",

  },
  text: {
      width: "100%",
      color: "white",
      fontSize: 20,
      lineHeight: 34,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      zIndex: 10,
      position: "absolute",
      top: "40%"
  },
  text2: {
    width: "100%",
    color: "white",
    fontSize: 20,
    lineHeight: 34,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red",
    zIndex: 10,
    position: "absolute",
    top: "53%"
},
  texto: {
      width: "90%",
      color: "white",
      fontSize: 40,
      // lineHeight: 84,
      fontWeight: "bold",
      marginLeft: 20,
      textAlign: "center",
      backgroundColor: "blue",
      top: "20%",
      height: 150
  }
});