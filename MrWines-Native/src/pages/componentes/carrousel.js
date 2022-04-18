import React from "react";
import { Text, Dimensions, StyleSheet, View,  ImageBackground } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Wines from './json'

const Carrusel = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={4}
      autoplayLoop
      index={4}

    >
      {Wines.map((evento) => (
          <ImageBackground key={evento.name} source={{uri: evento.image}} style={styles.imagedos}>
        <View style={[styles.child, ]}>
          <Text style={styles.text}>{evento.name} </Text>
          <Text style={styles.text}>{evento.description}</Text>
        </View>
        </ImageBackground>
      ))}
    </SwiperFlatList>
  </View>
);

// const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {  
    flex: 1,
     height:"100%",
      width: "100%", 
      paddingBottom:2,
    },
  child: { height: "100%", width: 270, alignItems: "center", justifyContent: "flex-end" },
  text: {textAlign: "center",  fontSize: 30, color: "white", },
  imagedos: {
   height:"100%",
  },
});

export default Carrusel;