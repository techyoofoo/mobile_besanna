import React, { Component } from "react";
import { Text, View, TouchableOpacity, StatusBar, Image } from "react-native";
import appStyleSheets, { themeColor, deviceDimensions } from "../styles/styles";


export default class ActivateScanner extends Component {
  render() {
    return (
      <View>
        <StatusBar style={themeColor} />
        <Image
            source={require("../../assets/besanna_logo.png")}
            style={{ width: deviceDimensions.width / 2, height: 53, resizeMode: "center", alignSelf: 'center', paddingTop: 20 }}
          />
        <Text style={appStyleSheets.activateScannerHeader}> Success!</Text>
        <Text style={appStyleSheets.activateScannerText}>
          Your scanner is now active on
        </Text>
        <Text style={{ textAlign: "center", fontSize: 15 }}>your account</Text>
        <Text style={{ textAlign: "center", paddingTop: 30, fontSize: 15 }}>
          What do you want to do now ?
        </Text>
        <TouchableOpacity
          style={appStyleSheets.btnActivateScanner}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("ScanningMenu")}
        >
          <Text
            style={{
              color: themeColor,
              textAlign: "center"
            }}
          >
            I'm ready to start scanning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={appStyleSheets.btnActivateScanner}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("MyAccountScreen")}
        >
          <Text
            style={{
              color: themeColor,
              textAlign: "center"
            }}
          >
            Go to my profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={appStyleSheets.btnActivateScanner}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("PersonalizePerference")}
        >
          <Text
            style={{
              color: themeColor,
              textAlign: "center"
            }}
          >
            Personalize the app
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
