import React, { Component } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import appStyleSheets, { themeColor, deviceDimensions } from "../styles/styles";

export default class AppScanner extends Component {
render() {
  return (
    <View>
      <StatusBar style={themeColor} />
      {/* <Text style={appStyleSheets.appScannerHeader}>besanna</Text> */}      
        <Image
            source={require("../../assets/besanna_logo.png")}
            style={{ width: deviceDimensions.width / 2, height: 53, resizeMode: "center", alignSelf: 'center', paddingTop: 20 }}
          />
      <Text style={appStyleSheets.appScannerText}>
        we are glad you're here
        </Text>

      <Text style={appStyleSheets.appScannerText}>
        Tap below to activate your scanner
        </Text>
      <Text style={appStyleSheets.appScannerText}>
        and start using the Besanna App
        </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("LoadCamera")}
      >
        <View
          style={appStyleSheets.appScannerImage}
        >
          <Image source={require("../../assets/scanner.png")} />
        </View>
      </TouchableOpacity>      
    </View>
  );
}
}
