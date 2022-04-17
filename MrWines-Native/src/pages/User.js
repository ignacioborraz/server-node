import React from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image, Dimensions, TouchableHighlight} from "react-native"
import { useNavigation } from "@react-navigation/native";



function Detail(){

    return (

<View>
<TouchableHighlight
                style={styles.submit}
                type="submit"
                onPress={()=>{navigation.navigate("Sign IN")}}
              >
                  <Text style={styles.submit2} >Sign In</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.submit}
                type="submit"
                onPress={()=>{navigation.navigate("Sign up")}}
              >
                  <Text style={styles.submit2} >Sign Up</Text>
              </TouchableHighlight>
</View>

    )
}
export default Detail