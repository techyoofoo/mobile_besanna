import React, { Component } from "react";
import {
  Alert,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView
} from "react-native";
import appStyleSheets from "../styles/styles";
import HeaderScreen from "./header-screen";

export default class LoginScreen extends Component {
  state = {
    txtLoginEmailId: "surendra",
    txtLoginPassword: "123",
    isLoading: true,
    errorLoginEmailId: true,
    errorLoginPass: true,
    msgValidate: ""
  };
  // componentDidMount() {
  //   return fetch("https://facebook.github.io/react-native/movies.json")
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       console.log("Response", responseJson);
  //       // this.setState({
  //       //   isLoading: false,
  //       //   dataSource: responseJson.movies,
  //       // }, function(){

  //       // });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  btnLoginClick = () => {
    // const { txtLoginEmailId, txtLoginPassword } = this.state;
    // console.log("Email", txtLoginEmailId);
    // if (this.state.txtLoginEmailId.trim() != 0) {
    //   this.setState({ errorLoginEmailId: true });
    // }
    // // else if (this.state.txtLoginPassword.trim() !== 0) {
    // //   this.setState({ errorLoginPass: true });
    // // }
    // else {
      console.log("All fields filled");
      fetch("http://192.168.1.103:9002/validate-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name: this.state.txtLoginEmailId,
        user_pass: this.state.txtLoginPassword
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        
        if (responseJson.Message === "Success") {
          this.props.navigation.navigate("AppScanner");
        } else {
          this.setState({ msgValidate: responseJson.Message });
        }
      })
      .catch(error => {
        console.error(error);
      });
    // }
    
    //this.props.navigation.navigate("AppScanner")
  };

  render() {
    return (
      <View>
        <HeaderScreen />
        <Text style={appStyleSheets.loginHeader}>Login</Text>
        <ScrollView
          contentContainerStyle={{ height: 1000, paddingVertical: 30 }}
        >
          <Text style={appStyleSheets.labelStyle}>Email</Text>
          <TextInput
            style={appStyleSheets.textBoxStyle}
            placeholder="Enter Email id"
            keyboardType="email-address"
            onChangeText={valLoginEmailId =>
              this.setState({
                txtLoginEmailId: valLoginEmailId,
                errorLoginEmailId: true
              })
            }
            value={this.state.txtLoginEmailId}
          />
          <View style={{ paddingTop: 10 }} />
          {this.state.errorLoginEmailId == false ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Please enter the email id to proceed.
            </Text>
          ) : null}
          <Text style={appStyleSheets.labelStyle}>Password</Text>
          <TextInput
            style={appStyleSheets.textBoxStyle}
            placeholder="Enter Password"
            onChangeText={valLoginPassword =>
              this.setState({
                txtLoginPassword: valLoginPassword,
                errorLoginPass: true
              })
            }
            value={this.state.txtLoginPassword}
          />
          {this.state.errorLoginPass == false ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Please enter the password to proceed.
            </Text>
          ) : null}
          <TouchableOpacity
            style={appStyleSheets.buttonStyle}
            activeOpacity={0.5}
            onPress={this.btnLoginClick}
          >
            <Text style={appStyleSheets.bttonTextStyle}> Login </Text>
          </TouchableOpacity>
          <Text style={{ color: "red", textAlign: "center" }}>
            {this.state.msgValidate}
          </Text>
          <Text
            style={{
              paddingTop: 15,
              color: "#999999",
              textAlign: "center"
            }}
            onPress={() =>
              this.props.navigation.navigate("ForgotPasswordScreen")
            }
          >
            Forgot Password ?
          </Text>
        </ScrollView>
      </View>
    );
  }
}
