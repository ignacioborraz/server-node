import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    TextInput,
    TouchableHighlight,
    Alert,
    ImageBackground,
    Dimensions
  } from "react-native";
  import React, { Component } from "react";
  import { AntDesign } from '@expo/vector-icons';
  var {height} = Dimensions.get('window')
  
  export default class Account extends Component {
    constructor() {
      super();
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "",
      };
    }
  
    ChangeFirstName(firstName) {
      this.setState({ firstName });
    }
    ChangeLastName(lastName) {
      this.setState({ lastName });
    }
    ChangeEmail(email) {
      this.setState({ email });
    }
    ChangePassword(password) {
      this.setState({ password });
    }
    ChangeCountry(country) {
      this.setState({ country });
    }
    buttonPressed() {
      if (
        this.state.firstName &&
        this.state.lastName &&
        this.state.email &&
        this.state.password &&
        this.state.country
      ) {
        Alert.alert("congratulations, here begins your adventure :D");
      } else {
        Alert.alert("You must complete all the fields");
      }
    }
    render() {
      return (
        <ImageBackground
          source={require("../../assets/backgroundForm.jpg")}
          style={styles.viewContainer}
        >
          <Text style={styles.text0}>Sign Up</Text>
          <View style={styles.containerForm}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={this.state.firstName}
              onChangeText={(firstName) => this.ChangeFirstName(firstName)}
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              value={this.state.lastName}
              onChangeText={(lastName) => this.ChangeLastName(lastName)}
            />
            <TextInput
              style={styles.input}
              placeholder="URL photo"
              value={this.state.email}
              onChangeText={(email) => this.ChangeEmail(email)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email adress"
              value={this.state.password}
              onChangeText={(password) => this.ChangePassword(password)}
            />
            <TextInput
              style={styles.input}
              placeholder="Create password"
              textContentType="password"
              value={this.state.country}
              onChangeText={(country) => this.ChangeCountry(country)}
            />
            <View style={styles.viewSubmit}>
              <TouchableHighlight
                onPress={() => this.buttonPressed()}
                style={styles.submit}
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
        </ImageBackground>
      );
    }
  }
  
  
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
      borderRadius: 50,
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