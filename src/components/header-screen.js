import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import appStyleSheets, { themeColor } from "../styles/styles";

export default class HeaderScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar style={themeColor} />
        <View style={appStyleSheets.bgHeader}>
          <Text style={appStyleSheets.header}>besanna</Text>
        </View>
      </View>
    );
  }
}
