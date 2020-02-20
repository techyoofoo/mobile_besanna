import React, { Component } from "react";
import { View, Text, StatusBar, Image, Dimensions } from "react-native";
import appStyleSheets, { themeColor } from "../styles/styles";

const deviceWidth = Dimensions.get("screen").width;
export default class HeaderScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar style={themeColor} hidden />
        <View style={appStyleSheets.bgHeader}>
        <Image
            source={require("../../assets/besanna_logo_white.png")}
            style={{ width: deviceWidth / 2, height: 53, resizeMode: "center", alignSelf: 'center' }}
          />
        </View>
      </View>
    );
  }
}
