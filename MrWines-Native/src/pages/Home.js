import React from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image, Dimensions} from "react-native"
import Carrusel from '../pages/componentes/carrousel'
var {height} = Dimensions.get('window')


export default function Home (){

    return(
        <ScrollView>
            <ImageBackground source={require("../../assets/cosechas.jpg")} style = {styles.viewContainer1}>
                <Image style = {styles.customLogo} source={require("../../assets/logo-mrwines.png")}/>
                <Text style = {styles.text1}>
                Feel the taste of the vines
                </Text>
            </ImageBackground>
            <ImageBackground source={require("../../assets/Barriles.jpg")} style = {styles.viewContainer2}>
            <Text style={styles.ourTop}>OUR TOP</Text>
          <View style = {styles.carrusel}>   
      <Carrusel />
      </View>

            </ImageBackground>
            <ImageBackground source={require("../../assets/copa.jpg")} style = {styles.viewContainer3}>
            <Text style={styles.ourTop}>ABOUT US</Text>
                <Text style={styles.text2}>
                Hello wine lovers! You may be wondering what Mr. Wines is. Well, Mr. Wines started as a dream, became a project and ended up made in reality. We are group of 6
                young entrepeneurs, passionate about wine and the infinite universe of experiences it offers us. The rich history, culture and folklore around this sacred drink only strengthens the tasty experience that the grape gives us.
                We decide to undertake this dream by establishing our own wine cellar to gather the best collection of wines and share it with all lovers of the vine.
                </Text>
            </ImageBackground>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewContainer1: {
        height: height,
        justifyContent: "center",
        alignItems: "center"
    },
    viewContainer2: {
        height: height,
        justifyContent: "center",
        alignItems: "center"
    },
    viewContainer3: {
        height: height,
        justifyContent: "center",
        alignItems: "center"
    },
    customLogo: {
        position: "absolute",
        top: "10%",
        width: 350,
        height: 350,
        margin: 0,
        padding: 0
    },
    text1: {
        color: "red",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 190,
        textShadowColor: "#333",
        textShadowRadius: 10,
        
    },
    text2: {
        padding: 20,
        backgroundColor: "#rgba(79, 79, 79, 0.58)",
        borderRadius: 10,
        color: "white",
        textAlign: "center",
        fontSize: 18,
        width: 300,
    },
    carrusel:{
        height: "70%",
        width: "70%"
    },
    ourTop: {
        color: "white",
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: "black",
        textShadowRadius: 10,
        marginBottom: 10,
      },
  });