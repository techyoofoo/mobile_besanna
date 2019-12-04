import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import appStyleSheets, { themeColor, deviceDimensions } from "../styles/styles";

export default class ScanningMenu extends Component {
  render() {
    return (
      <View>
        <View style={appStyleSheets.appScannerImage}>
          <Image source={require("../../assets/scan_menu.png")} />
        </View>
        <View style={{ flexDirection: "row", justifyContent:'space-around' }}>
          <View style={{ margin: 10 }}>
            <TouchableOpacity
              style={appStyleSheets.btnTextScanMenu}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={{ textAlign: "center", margin: 10 }}>
                Friend{"\n"}
                Family
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 10 }}>
            <TouchableOpacity
              style={appStyleSheets.btnTextScanMenu}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("SelfScanScreen")}
            >
              <Text style={{ textAlign: "center", margin: 10 }}>
                Scan{"\n"}
                MySelf
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 10 }}>
            <TouchableOpacity
              style={appStyleSheets.btnTextScanMenu}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={{ textAlign: "center", margin: 10 }}>
                My{"\n"}
                Pet
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: themeColor,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
              width: 80,
              height: 40
              // flex: 1,
            }}
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <Text
              style={{
                textAlign: "center",
                margin: 10,
                color: "#fff"
              }}
            >
              Scan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
