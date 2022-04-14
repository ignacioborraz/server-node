import React from "react";
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
import CardWines from "./componentes/cardWines"
import {connect} from "react-redux";
import wineActions from "./redux/actions/wineActions";
import { useEffect } from "react";

var { height } = Dimensions.get("window");

function Shop(props) {
    // console.log(props)

    useEffect(() => {
        props.getWines();
      }, []);
    
      function filterWiness(event) {
          props.getTypeWines(props.wines, event);
          console.log(event)
      }

  return (
    <ScrollView>
      <ImageBackground
        style={styles.customImg}
        source={require("../../assets/tablas.jpg")}
      >
        <View style={styles.view1}>
          <Text style={styles.text1}>Choose your wine</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text2}>Search:</Text>
          <TextInput  onChangeText={(text) => {
              filterWiness(text)}} style={styles.customInput} />
        </View>
        <View>
            <CardWines filterWines={props.filterWine}/>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const mapDispatchToProps = {
    getWines: wineActions.getWines,
    getTypeWines: wineActions.getTypeWines
  };
  
  const mapStateToProps = (state) => {
    return {
      wines: state.wineReducer.wines,
      types: state.wineReducer.types,
      filterWine: state.wineReducer.filterWine,
      oneWine: state.wineReducer.oneWine,
      auxWine: state.wineReducer.auxWine
      
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Shop);

const styles = StyleSheet.create({
  view1: {
    height: 90,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  customImg: {
    height: height,
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
