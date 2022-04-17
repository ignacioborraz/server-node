import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableHighlight, Alert, ImageBackground, Button, onChangeText, ScrollView} from "react-native";
//   import React, { Component } from "react";
import { useState } from "react";
  import userActions from "../pages/redux/actions/userActions"
  import {connect} from 'react-redux'
  import { AntDesign } from '@expo/vector-icons';
  
  function SignUp (props) {

   //defino las variables de estado
   const [name,setName] = useState("")
   const [lastName,setLastName] = useState("")
   const [userPhoto,setUserPhoto] = useState("")
   const [mail,setMail] = useState("")
   const [pass,setPass] = useState("")
   //const [file,setFile] = useState()

   const handleSubmit = (event) => {
    //    event.preventDefault()
       const userData={
           userName: name.trim(),
           lastName: lastName.trim(),
           userPhoto: userPhoto.trim(),
           email: mail.trim(),
           password: pass.trim(),
           admin: false,
           from: "SignUpForm"
       }
       //console.log(userData)
       props.signUpUser(userData)
   }
      return (
        <ImageBackground
          source={require("../../assets/backgroundForm.jpg")}
          style={styles.viewContainer}
        >
          <ScrollView>
          <Text style={styles.text0}>Sign Up</Text>
          <View style={styles.containerForm}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={e=>setName(e)} required
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              onChangeText={e=>setLastName(e)} required
            />
            <TextInput
              style={styles.input}
              placeholder="URL photo"
              onChangeText={e=>setUserPhoto(e)} required 
               />
            <TextInput
              style={styles.input}
              placeholder="Email adress"
              onChangeText={e=>setMail(e)} required
              
            />
            <TextInput
              style={styles.input}
              placeholder="Create password"
              onChangeText={e=>setPass(e)} required
            />
            <View style={styles.viewSubmit}>
              <TouchableHighlight
                style={styles.submit}
                onPress={handleSubmit}
              >
                  <Text style={styles.submit2}>Create Account</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.buttonPressed()}
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
                    You have an account?
                </Text>
                <Text style = {styles.text2}>
                    Please sign in
                </Text>
                </ScrollView>
        </ImageBackground>
      );
    }
    const mapDispatchToProps = {
        signUpUser: userActions.signUpUser
    }
    const mapStateToProps = (state) => {
        return {
            message: state.userReducer.message
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
  
  
  
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
      color: "#5B5656",
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