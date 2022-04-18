import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image,
    TouchableHighlight,
    Dimensions,
    Button,
    Alert,
  } from "react-native";
  import botella from "../../assets/botellavino2.png";
  import { FontAwesome5 } from '@expo/vector-icons';
  import {connect} from "react-redux"
  import wineActions from "../pages/redux/actions/wineActions"
  import { useLinkProps } from "@react-navigation/native";
  import React, {useEffect, useState} from "react"
  import { Entypo } from '@expo/vector-icons';
  import {useDispatch, useSelector} from 'react-redux'
  import { useNavigation } from "@react-navigation/native";


  
  function Detail(props) {

    const navigation = useNavigation()

  
      const {id} = props.route.params
      const dispatch = useDispatch()

      useEffect(() => {
        dispatch(wineActions.oneWine(id))
    },[])
  
    const oneWine = useSelector(store => store.wineReducer.onlyWine)
    console.log(oneWine)
  
    return (
      <ImageBackground
        style={styles.customContainer}
        source={require("../../assets/corchos.jpg")}
      >
          
        <View style={styles.view1}>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Image style={styles.customImg} source={{uri: oneWine.photo}} />
              <TouchableHighlight
                  style={styles.submit}
                  type="submit"
                  onPress={() => Alert.alert("The product has been added")}
                >
                    <Text style={styles.textSubmit}>Buy</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.submit2}
                  type="submit"
                  onPress={()=> {navigation.navigate("Basket")}}
                >
                    <Text style={styles.textSubmit}>
                    <Entypo name="shopping-cart" size={18} color="black" />
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.view4}>
              <View style={styles.view5}>
                <Text style={styles.text1}>{oneWine.nameWine}</Text>
                <Text style={styles.text2}>{oneWine.type}</Text>
                <Text style={styles.text2}>{oneWine.variety}</Text>
              </View>
              <View style={styles.view6}>
                <Text style={styles.text1}>U$D {oneWine.price}</Text>
              </View>
              <ScrollView>
                <Text style={styles.text3}>Description:</Text>
                <Text style={styles.text2}>Tasting notes:</Text>
                <Text>COLOR: {oneWine.color}</Text>
                <Text>
                  AROMA: {oneWine.smell}
                </Text>
                <Text>
                  PALATE: {oneWine.palate}
                </Text>
                <Text>
                  FOOD: {oneWine.food}
                </Text>
                <Text style={styles.text2}>Origin:</Text>
                <Text>{oneWine.country} - {oneWine.harvest} years</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
  
  const mapDispatchToProps = {
      oneWine: wineActions.oneWine
  }
  
  export default connect(null, mapDispatchToProps)(Detail)
  
  
  const styles = StyleSheet.create({
    customContainer: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    view1: {
      width: 300,
      height: 450,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: "white",
    },
    customImg: {
      width: null,
      resizeMode: "contain",
      height: 220,
      marginTop: 10,
      marginBottom: 10,
    },
    view2: {
      height: "100%",
      width: "100%",
      flexDirection: "row",
      borderRadius: 10,
    },
    view3: {
      backgroundColor: "white",
      width: "30%",
      borderTopLeftRadius: 10,
      borderRadius: 10,
    },
    view4: {
      backgroundColor: "white",
      padding: 10,
      width: "70%",
      borderRadius: 10,
    },
    view5: {
      backgroundColor: "white",
    },
    view6: {
      backgroundColor: "white",
      alignItems: "flex-end",
      paddingRight: 5,
    },
    text1: {
      fontWeight: "bold",
      fontSize: 20,
    },
    text2: {
      fontWeight: "bold",
    },
    text3: {
      fontSize: 17,
      fontWeight: "bold",
    },
    customButton: {
        marginBottom: 10
    },
    submit: {
        marginBottom: 5,
        width: 80,
        marginLeft: 4
    },
    textSubmit: {
      color: "black",
      padding: 20,
      backgroundColor: "#824d48",
      fontWeight: "bold",
      borderRadius: 12,
      textAlign: "center"
    },
    submit2: {
      marginBottom: 5,
      width: 80,
      marginLeft: 4
  },
  
  
  });