import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import scanStyles, { themeColor } from "../../styles/scan-styles";
import appStyleSheets from "../../styles/styles";

export default class ScanAFriend extends Component {
    state = {
        allBtnColorStatus: false,
        oilBtnColorStatus: false,
        supplementsBtnColorStatus: false
    }
  render() {
      let btncolor, textColor;
      const { allBtnColorStatus, oilBtnColorStatus, supplementsBtnColorStatus} = this.state;
      if(allBtnColorStatus === false) {
        btncolor = scanStyles.btnDarkBackground;
          textColor= scanStyles.textDark;
      } else{
        btncolor = scanStyles.btnLightBackground;
          textColor= scanStyles.textLight
      }
      
      let oilBtnColor, oilTextColor;
      if(oilBtnColorStatus === false) {
          oilBtnColor = scanStyles.btnDarkBackground;
          oilTextColor = scanStyles.textDark;
      }else {
          oilBtnColor = scanStyles.btnLightBackground;
          oilTextColor = scanStyles.textLight
      }

      let supplmntBtnColor, supplmntTextColor;
      if(supplementsBtnColorStatus === false){
          supplmntBtnColor = scanStyles.btnDarkBackground;
          supplmntTextColor = scanStyles.textDark;
      }else {
          supplmntBtnColor = scanStyles.btnLightBackground;
          supplmntTextColor = scanStyles.textLight;
      }

    return (
      <View>
        <View
          style={{
            borderColor: themeColor,
            borderWidth: 2,
            borderStyle: "solid",
            padding: 10,
            height: 180,
            backgroundColor: themeColor
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("FriendList")}
          >
            <Image
              style={{
                margin: 5,
                position: "absolute",
                top: 28,
                left: 10,
                width: 35,
                height: 35
              }}
              source={require("../../../assets/close.png")}
            />
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 40,
                paddingTop: 28,
                letterSpacing: 1
              }}
            >
              besanna
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              marginTop: 20,
              fontWeight: "bold"
            }}
          >
            Add Friend
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: "skyblue",
                borderRadius: 40,
                borderColor: themeColor
              }}
            >
              <Image
                source={require("../../../assets/profile.png")}
                style={{ width: 80, height: 80, borderRadius: 30 }}
              />
            </View>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            height: 1000,
            paddingVertical: 30,
            paddingTop: 60
          }}
        >
          <View>
            <TextInput
              style={appStyleSheets.textBoxStyle}
              placeholder="Name"
              keyboardType="default"
              onChangeText={() => {}}
              value=""
            />
            <View style={{ paddingTop: 10 }} />
            <TextInput
              style={appStyleSheets.textBoxStyle}
              placeholder="Enter Email id"
              keyboardType="email-address"
              onChangeText={() => {}}
              value=""
            />
            <View style={{ paddingTop: 10 }} />
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
              style={btncolor}
              activeOpacity={0.5}
              onPress={() => {(allBtnColorStatus) ? this.setState({allBtnColorStatus: false}): this.setState({allBtnColorStatus: true})}}
            >
              <Text style={textColor}>All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
             style={oilBtnColor}
              activeOpacity={0.5}
              onPress={() => {(oilBtnColorStatus) ? this.setState({oilBtnColorStatus: false}) : this.setState({oilBtnColorStatus: true})}}
            >
              <Text style={oilTextColor}>Oils</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
              style={supplmntBtnColor}
              activeOpacity={0.5}
              onPress={() => {(supplementsBtnColorStatus) ? this.setState({supplementsBtnColorStatus: false}): this.setState({supplementsBtnColorStatus: true})}}
            >
              <Text style={supplmntTextColor}>Supplements</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
              style={scanStyles.btnScan}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={scanStyles.txtScan}>Go</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
