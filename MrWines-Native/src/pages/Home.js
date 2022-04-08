import React from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from "react-native"

export default function Home ({navigation}){
    return(
        <ScrollView>
            <ImageBackground source={require("../../assets/cosechas.jpg")} style = {styles.viewContainer1}>
                <Image style = {styles.customLogo} source={require("../../assets/logo-mrwines.png")}/>
                <Text style = {styles.text1}>
                Feel the taste of the vines
                </Text>
            </ImageBackground>
            <ImageBackground source={require("../../assets/Barriles.jpg")} style = {styles.viewContainer2}>
                <Text>
                Estas en Home
                </Text>
            </ImageBackground>
            <ImageBackground source={require("../../assets/copa.jpg")} style = {styles.viewContainer3}>
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
        height: 543,
        justifyContent: "center",
        alignItems: "center"
    },
    viewContainer2: {
        height: 543,
        justifyContent: "center",
        alignItems: "center"
    },
    viewContainer3: {
        height: 543,
        justifyContent: "center",
        alignItems: "center"
    },
    customLogo: {
        position: "absolute",
        top: 170,
        width: 150,
        height: 150,
        margin: 0,
        padding: 0
    },
    text1: {
        color: "#B33030",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 60
    },
    text2: {
        padding: 20,
        backgroundColor: "#rgba(79, 79, 79, 0.58)",
        borderRadius: 50,
        color: "white",
        textAlign: "center"
    }
  });