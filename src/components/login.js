import React, { Component } from "react";
import { Alert,Animated, Text, TextInput, TouchableOpacity,TouchableWithoutFeedback, View } from "react-native";
import appStyleSheets from "../styles/styles";
import HeaderScreen from "./header-screen";

export default class LoginScreen extends Component {  
  
  state = {
    txtLoginEmailId: "",
    txtLoginPassword: ""
  };
  
  render() {
  
    return (
      <View>
        <HeaderScreen />
        <Text style={appStyleSheets.loginHeader}>Login</Text>        
        <Text style={appStyleSheets.labelStyle}>Email</Text>
        <TextInput
          style={appStyleSheets.textBoxStyle}
          placeholder="Enter Email id"
          keyboardType="email-address"
          onChangeText={valLoginEmailId =>
            this.setState({ txtLoginEmailId: valLoginEmailId })
          }
          value={this.state.txtLoginEmailId}
        />
        <View style={{ paddingTop: 10 }} />
        <Text style={appStyleSheets.labelStyle}>Password</Text>
        <TextInput
          style={appStyleSheets.textBoxStyle}
          placeholder="Enter Password"
          onChangeText={valLoginPassword =>
            this.setState({ txtLoginPassword: valLoginPassword })
          }
          value={this.state.txtLoginPassword}
        />
        <TouchableOpacity
          style={appStyleSheets.buttonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("AppScanner")}
        >
          <Text style={appStyleSheets.bttonTextStyle}> Login </Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingTop: 15,
            color: "#999999",
            textAlign: "center"
          }}
          onPress={() => this.props.navigation.navigate("ForgotPasswordScreen")}
        >
          Forgot Password ?
        </Text>   
        
      </View>
    );
  }
}
