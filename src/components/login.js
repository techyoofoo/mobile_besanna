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
import { base_url } from "../constants";

export default class LoginScreen extends Component {
  state = {
    txtLoginEmailId: "",
    txtLoginPassword: "",
    showPasswordField: false,
    isLoading: true,
    errorLoginEmailId: true,
    errorLoginPass: true,
    msgValidate: "",
    disabledButton: true,
    editEmailId: true
  };
  //Validate Email Id
  btnValidateEmail = () => {
    // const urlDt =
    // console.log("----Email Click--------"); http://192.168.1.103:9002/shopify-user/nick@reboundair.com
    fetch(`${base_url}shopify-user/${this.state.txtLoginEmailId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.data.length > 0)
          this.setState({ showPasswordField: true, editEmailId: false });
        else this.setState({ showPasswordField: false, editEmailId: true });
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };
  //validate email and unique verfication code
  btnLoginClick = () => {
    fetch(`${base_url}validate-shopify-user-unique-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shopify_user_email: this.state.txtLoginEmailId,
        user_code: this.state.txtLoginPassword
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.data.length > 0)
          this.props.navigation.navigate("AppScanner");
        else this.setState({ errorLoginPass: false });

        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
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
            onChangeText={valLoginEmailId => {
              valLoginEmailId.length > 0
                ? this.setState({
                    txtLoginEmailId: valLoginEmailId,
                    errorLoginEmailId: true,
                    disabledButton: false
                  })
                : this.setState({
                    txtLoginEmailId: valLoginEmailId,
                    errorLoginEmailId: true,
                    disabledButton: true
                  });
            }}
            value={this.state.txtLoginEmailId}
            editable={this.state.editEmailId}
          />
          <View style={{ paddingTop: 10 }} />
          {this.state.errorLoginEmailId == false ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Please enter the email id to proceed.
            </Text>
          ) : null}
          {this.state.showPasswordField ? (
            <View>
              <Text style={appStyleSheets.labelStyle}>Password</Text>
              <TextInput
                style={appStyleSheets.textBoxStyle}
                secureTextEntry={true}
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
                  Inavlid verfication code.
                </Text>
              ) : null}
            </View>
          ) : (
            <View />
          )}

          {!this.state.showPasswordField ? (
            <TouchableOpacity
              style={
                !this.state.disabledButton
                  ? appStyleSheets.buttonStyle
                  : appStyleSheets.disabledButtonStyle
              }
              activeOpacity={0.5}
              onPress={this.btnValidateEmail}
              disabled={this.state.disabledButton}
              // activeOpacity={disabled ? 1 : 0.7} onPress={!disabled && this.btnLoginClick}
            >
              <Text style={appStyleSheets.bttonTextStyle}>
                {" "}
                Validate Email{" "}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={
                !this.state.disabledButton
                  ? appStyleSheets.buttonStyle
                  : appStyleSheets.disabledButtonStyle
              }
              activeOpacity={0.5}
              onPress={this.btnLoginClick}
              disabled={this.state.disabledButton}
              // activeOpacity={disabled ? 1 : 0.7} onPress={!disabled && this.btnLoginClick}
            >
              <Text style={appStyleSheets.bttonTextStyle}> Login </Text>
            </TouchableOpacity>
          )}
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
