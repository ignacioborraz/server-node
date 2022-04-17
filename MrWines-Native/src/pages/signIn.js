import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableHighlight, Alert, ImageBackground, Button, onChangeText} from "react-native";
  import React, { Component } from "react";
import { useState } from "react";
  import userActions from "../pages/redux/actions/userActions"
  import {connect} from 'react-redux'
  import { AntDesign } from '@expo/vector-icons';
  import { useNavigation } from "@react-navigation/native";


  
function SignIn (props){
    const navigation = useNavigation()

    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")

	const handleSubmit = (event) => {
		// event.preventDefault()
		const userLogin = {
			email: mail.trim(),
			password: pass
		}
		//console.log(userLogin)
		props.logInUser(userLogin)
	}
    
      return (
        <ImageBackground
          source={require("../../assets/backgroundSignIn.jpg")}
          style={styles.viewContainer}
        >
          <Text style={styles.text0}>Sign In</Text>
          <View style={styles.containerForm}>
         
            <TextInput
              style={styles.input}
              placeholder="Email adress"
              onChangeText={e=>setMail(e)} required            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              
              onChangeText={e=>setPass(e)} required 
            />
            <View style={styles.viewSubmit}>
              <TouchableHighlight
                style={styles.submit}
                type="submit"
                onPress={handleSubmit}
              >
                  <Text style={styles.submit2} onPress={()=> {navigation.navigate("Home")}}>Sign In </Text>
              </TouchableHighlight>
              <TouchableHighlight
               
                style={styles.submit}
              >
                <View style={styles.submit2}>
                <AntDesign style = {styles.antDesign} name="google" size={14} color="white" />
                </View>
              </TouchableHighlight>
            </View>
            <View>
            </View>
          </View>
          <Text style = {styles.text1}>
                    You don´t have an account?
                </Text>
                <Text style = {styles.text2}>
                    Please sign up
                </Text>

        </ImageBackground>
      );
    
  }

  const mapDispatchToProps = {
      logInUser: userActions.logInUser
  }
  const mapStateToProps = (state) => {
      return {
          message: state.userReducer.message
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
  
  const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      backgroundColor: "white",
      height: 32,
      borderColor: "black",
      borderWidth: 1,
      marginBottom: 10,
      width: "100%",
      color: "black",
      borderRadius: 10,
      textAlign: "center",
    },
    containerForm: {
      width: 300,
      height: 300,
      backgroundColor: "#rgba(79, 79, 79, 0.4)",
      padding: 30,
      borderRadius: 10,
      borderColor: "black",
      borderWidth: 1,
      justifyContent: "center",
    },
    sign: {
      marginBottom: 20,
      height: 100,
      width: 200,
      justifyContent: "center",
      alignItems: "center",
    },
    text0: {
      fontSize: 50,
      color: "white",
      textShadowColor: "black",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      marginBottom: 10,
      marginTop: 20
    },
    submit: {
      backgroundColor: "grey",
      borderColor: "black",
      borderWidth: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 10,
      height: 30,
    },
    submit2: {
      color: "white",
      paddingTop: 5,
      justifyContent: "center",
      alignItems: "center"
    },
    
    viewSubmit: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: 40,
      width: 230
    },
    antDesign: {
        paddingTop: 2
    },
    text1: {
        fontSize: 18,
        color: "white",
        marginTop: 10,
        textShadowColor: "black",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    text2: {
      fontSize: 18,
      color: "white",
      textShadowColor: "black",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
  },
  });