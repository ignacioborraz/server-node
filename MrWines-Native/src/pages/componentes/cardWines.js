import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import wineActions from "../redux/actions/wineActions";

function CardWines(props) {
    // console.log(props)
  useEffect(() => {
    props.getWines();
    // console.log(props.getWines())
  },[]);

  return (
    <>
    {/* {console.log(props)} */}
      {props.filterWines?.length !== 0 ? ( ///////renderizo las cards
        props.filterWines?.map((wine, index) => (
          <TouchableOpacity
             key={index}
            style={styles.container}
            // onPress={() =>
            //   props.navigation.navigate("Place", {
            //     //aca iria la ruta hacia details
            //     id: wine._id,
            //   })
            // }
          >
            <Image source={{ uri: wine.photo }} style={styles.image} />
            <Text style={styles.text}>{wine.nameWine}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.ternario}>
          <Text style={styles.textTernario}>No wine found :(</Text>
        </View>
      )}
    </>
  );
}

const mapDispatchToProps = {
  getWines: wineActions.getWines,
  getTypeWines: wineActions.getTypeWines,
};

const mapStateToProps = (state) => {
  return {
    wines: state.wineReducer.wines,
    types: state.wineReducer.types,
    filterWine: state.wineReducer.filterWine,
    oneWine: state.wineReducer.oneWine,
    auxWine: state.wineReducer.auxWine,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardWines);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "auto",
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
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    zIndex: 10,
    position: "absolute",
    top: "40%",
  },
  ternario: {
    height: 900,
    alignItems: "center",
  },
  textTernario: {
    marginTop: 20,
    fontSize: 30,
    color: "grey",
  },
});
