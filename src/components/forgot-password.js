import React, { Component } from "react";
import { Alert, Text, TouchableOpacity,TextInput, View } from "react-native";
import appStyleSheets from "../styles/styles";
import HeaderScreen from "./header-screen";

export default class ForgotPasswordScreen extends Component {
    state={
        txtEmailId:""
    }
  render() {
    return (
      <View>
        <HeaderScreen />
        <View style={{paddingTop: 30}} />
        <Text style={appStyleSheets.labelStyle}>Email</Text>
        <TextInput
          style={appStyleSheets.textBoxStyle}
          placeholder="Enter email id"
          onChangeText={valEmail => this.setState({txtEmailId: valEmail})}
          value={this.state.txtEmailId}
        />
        <TouchableOpacity
          style={appStyleSheets.buttonStyle}
          activeOpacity={0.5}
          onPress={() => Alert.alert(this.state.txtEmailId)}
        >
          <Text style={appStyleSheets.bttonTextStyle}> Reset Password </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
