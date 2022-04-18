import React, { useEffect, useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Button} from "react-native";
import wineActions from "../redux/actions/wineActions";
import basketActions from "../redux/actions/basketActions";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigation } from "@react-navigation/native";




function CardWineShop(props) {
const navigation = useNavigation()

const [reload, setReload] = useState(false)
const [basket,setBasket] = useState([])

const dispatch = useDispatch()

useEffect(() => {
    dispatch(wineActions.filterWines(props.search))
},[props.search])

const filterFromRedux = useSelector(store => store.wineReducer.filter).sort(((a, b) => a.nameWine - b.nameWine))
//console.log(filterFromRedux)

let data = props.search ? filterFromRedux : props.wines
//console.log(data)

async function toAdd(event) {
    const idWine = event.target.value
    //console.log(idWine)
    await props.addProduct(idWine)
    setReload(!reload)
}

useEffect(() => {
    dispatch(basketActions.getUserBasket())
        .then(response=>setBasket(response))
        //.then(response=>console.log(response))
},[reload])

useEffect(() => {
    
},[reload])

  return (
    <>
    <ScrollView>
    {data.length>0 ?(
            data.map(everyWine => (
              
                <TouchableOpacity key={everyWine._id} style={styles.container} 
                 onPress={()=>{navigation.navigate("Detail",{id:everyWine._id})}}> 
                 
                 <View style={styles.containerimg}>
                 <Image source={{ uri: everyWine.photo }} style={styles.image} />
                  
                    <View style={styles.containertext}>
                    <Text style={styles.text}>{everyWine.nameWine}</Text>
                    <Text style={styles.text3}> {everyWine.type} - {everyWine.variety}</Text>
                    <Text style={styles.text2}>$ {everyWine.price}</Text>  
                    <View style={styles.containerbottom}>
                    
                 {props.user ? (
                            (props.products.includes(everyWine._id)) ? (
                                <TouchableHighlight  onPress={()=>{navigation.navigate("Detail",{id:everyWine._id})}}>
                                    <Button title="Add to Cart" color="#824d48"/>
                                </TouchableHighlight>    
                            ) : (
                                <Button title="Buy"  onPress={toAdd}/>
                            )
                        ) : (
                            <Button title="Buy"
                            color="#824d48" />
                        )}

                    </View>
                    
                    </View>
                    </View>
                    
                    
                    
                </TouchableOpacity> 
            
            ))
            ) : (
              <View style ={styles.matches}>
                <Text style={styles.texto}>No matches with your search. Please try again, Or contact us to give you a solution.</Text>
                </View>
              )}
  </ScrollView>
    </>
  );
}
const mapDispatchToProps = {
  addProduct: basketActions.addProduct,
  deleteProduct: basketActions.deleteProduct,
  getUserBasket: basketActions.getUserBasket
}

const mapStateToProps = (state) => {
  return {
      products: state.productReducer.products,
      user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWineShop)

const styles = StyleSheet.create({
  container: {
      // position: "relative",

     
      marginTop: 30,
      marginBottom: 25,
      alignItems: "center",
      

  },
  containerimg:{
    height: 450,
    width: 300,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: "black",
    marginBottom: 10,
  },
  image: {
      width: 200,
    height:220,
    resizeMode: 'contain'
  },
  text: {
      width: 200,
      color: "black",
      fontSize: 20,
      lineHeight: 34,
      fontWeight: "bold",
      textAlign: "center",
      //backgroundColor: "#000000c0",
  },
  text2: {
    width: 200,
    color: "black",
    fontSize: 20,
    lineHeight: 34,
    fontWeight: "bold",
    textAlign: "center",
   
  
},
  text3: {
    color: "black",
    width: 200,
    zIndex: 10,
    textAlign: "center",
  
  },
  containertext: {
  marginTop: 2,

  },
  containerbottom:{
    
    justifyContent: 'space-around',
    height: 90,
    margin: 25,
    
    //flexDirection: 'row',
  },
  Button:{
    borderRadius: 45,
  },
  matches:{
    backgroundColor: "white",
    height: 300,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 50,
    borderRadius: 15,
  },
  texto:{
    fontSize: 20,
  }
});